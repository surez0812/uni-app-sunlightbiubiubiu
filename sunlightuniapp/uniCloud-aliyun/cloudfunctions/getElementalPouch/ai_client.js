'use strict';

const axios = require('axios');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

// 扩展dayjs以支持时区
dayjs.extend(utc);
dayjs.extend(timezone);

// 天干地支常量
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

/**
 * 尝试从多个来源获取环境变量
 * @param {string} name - 环境变量名称
 * @returns {string|null} - 环境变量值，如果不存在则返回null
 */
function getEnvVariable(name) {
  // 尝试从云函数context获取
  if (global.context && global.context.env && global.context.env[name]) {
    return global.context.env[name];
  }
  
  // 尝试从process.env获取
  if (process.env && process.env[name]) {
    return process.env[name];
  }
  
  // 尝试从config.json获取
  try {
    const config = require('./config.json');
    // 检查各个平台配置
    for (const platform of ['app', 'mp-weixin', 'mp-alipay', 'h5']) {
      if (config[platform] && config[platform].env && config[platform].env[name]) {
        return config[platform].env[name];
      }
    }
  } catch (e) {
    console.warn(`无法从config.json读取环境变量 ${name}:`, e.message);
  }
  
  return null;
}

/**
 * 根据公历年份获取干支
 * @param {number} year - 年份
 * @returns {Array} - [天干, 地支]
 */
function getYearGanzhi(year) {
  try {
    // 1984年为甲子年
    const baseYear = 1984;
    
    // 计算年份与基准年的差值
    let offset = (year - baseYear) % 60;
    if (offset < 0) offset += 60;
    
    // 计算天干索引 (0-9)
    const stemIndex = offset % 10;
    
    // 计算地支索引 (0-11)
    const branchIndex = offset % 12;
    
    return [HEAVENLY_STEMS[stemIndex], EARTHLY_BRANCHES[branchIndex]];
  } catch (e) {
    console.error(`计算年干支出错: ${e.message}`);
    return ['甲', '子']; // 返回默认值
  }
}

/**
 * AI客户端类
 */
class AIClient {
  constructor() {
    // 基本配置
    this.baseConfigs = {
      'openai': {
        apiKey: getEnvVariable('OPENAI_API_KEY'),
        baseUrl: "https://api.openai.com/v1",
        timeout: 360000,
        models: ['gpt-4-turbo-preview', 'gpt-4']
      },
      'siliconflow': {
        apiKey: getEnvVariable('SILICONFLOW_API_KEY'),
        baseUrl: "https://api.siliconflow.cn/v1",
        timeout: 760000,
        models: ['Pro/deepseek-ai/DeepSeek-V3']
      },
      'aliyun': {
        apiKey: getEnvVariable('DASHSCOPE_API_KEY'),
        baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1",
        timeout: 360000,
        models: [
          'qwen-max-2025-01-25',
          'deepseek-r1',
          'qwen-plus',
          'deepseek-v3',
          'deepseek-r1-distill-qwen-32b',
          'deepseek-r1-distill-llama-70b'
        ]
      },
      'deepseek': {
        apiKey: getEnvVariable('DEEPSEEK_API_KEY'),
        baseUrl: "https://api.deepseek.com/v1",
        timeout: 360000,
        models: ['deepseek-reasoner', 'deepseek-chat']
      }
    };

    // 初始化客户端
    this.clients = {};
    for (const [provider, config] of Object.entries(this.baseConfigs)) {
      try {
        const apiKey = config.apiKey;
        if (!apiKey) {
          console.warn(`缺少 ${provider} 的API密钥，跳过初始化`);
          continue;
        }

        this.clients[provider] = {
          config,
          models: config.models
        };
        console.log(`成功初始化 ${provider} 客户端，模型: ${config.models.join(', ')}`);
      } catch (e) {
        console.error(`设置 ${provider} 时出错:`, e);
        continue;
      }
    }

    if (Object.keys(this.clients).length > 0) {
      console.log(`成功初始化客户端: ${Object.keys(this.clients).join(', ')}`);
    } else {
      console.error("没有成功初始化任何AI提供商");
    }
  }

  /**
   * 生成每日元气锦囊提示词
   * @param {Object} data - 用户数据
   * @param {string} weather - 天气情况
   * @returns {string} - 提示词
   */
  generateDailyAdvicePrompt(data, weather = "晴") {
    try {
      // 获取今天的日期
      const today = dayjs().tz('Asia/Shanghai');
      const todayStr = today.format('YYYY-MM-DD');
      
      // 获取今日干支
      const todayYear = today.year();
      const todayMonth = today.month() + 1;
      const todayDay = today.date();
      
      // 简化提示词，减少输出内容
      return `
请根据以下信息，为用户提供今日（${todayStr}）的元气锦囊分析：

- 阳历生日：${data.birth_date}
- 性别：${data.gender}
- 八字：${data.year_ganzhi} ${data.month_ganzhi} ${data.day_ganzhi} ${data.hour_ganzhi}
- 今日天气：${weather}
- 所在地区：${data.location || '北京'}

请提供以下分析（简明扼要，每项不超过50字）：

1. 今日整体运势
2. 今日穿搭建议
3. 今日投资建议
4. 今日健康建议
5. 今日工作学习建议
6. 今日感情建议

请按以下JSON格式返回结果：

{
  "daily_summary": "今日整体运势总结",
  "colors_advice": "今日适合的穿搭配色建议",
  "touzi_advice": "今日投资建议",
  "health_advice": "今日健康建议",
  "work_advice": "今日工作学习建议",
  "love_advice": "今日感情建议",
  "shechen_advice": "\\[{\\"time\\":\\"子时 (23:00-00:59)\\",\\"score\\":85,\\"advice\\":\\"子时建议\\"},{\\"time\\":\\"午时 (11:00-12:59)\\",\\"score\\":90,\\"advice\\":\\"午时建议\\"},{\\"time\\":\\"酉时 (17:00-18:59)\\",\\"score\\":80,\\"advice\\":\\"酉时建议\\"}\\]"
}

请确保返回的是有效的JSON格式，可以直接被解析。时辰建议只需要提供3个评分最高的时辰即可。特别注意，shechen_advice字段必须是一个转义后的字符串，不要直接输出JSON数组。`;
    } catch (error) {
      console.error('生成提示词失败:', error);
      return '';
    }
  }

  /**
   * 获取每日建议
   * @param {Object} data - 用户数据
   * @param {string} weather - 天气情况
   * @param {string} provider - AI提供商
   * @param {string} model - 模型名称
   * @returns {string} - AI生成的建议
   */
  async getDailyAdvice(data, weather = "晴", provider = "siliconflow", model = null) {
    try {
      // 检查提供商是否可用
      if (!this.clients[provider]) {
        const availableProviders = Object.keys(this.clients);
        if (availableProviders.length > 0) {
          provider = availableProviders[0];
          console.warn(`请求的提供商不可用，回退到 ${provider}`);
        } else {
          throw new Error("没有可用的AI提供商");
        }
      }

      // 生成提示词
      const prompt = this.generateDailyAdvicePrompt(data, weather);
      
      // 获取提供商的配置和模型列表
      const clientInfo = this.clients[provider];
      const config = clientInfo.config;
      const models = clientInfo.models;
      
      // 如果没有指定模型，使用该提供商的所有模型
      const modelsToTry = model ? [model] : models;
      let lastError = null;
      
      // 设置更短的超时时间
      const requestTimeout = 45000; // 45秒，之前是15秒
      
      for (const currentModel of modelsToTry) {
        try {
          console.log(`尝试使用 ${provider} 的模型 ${currentModel}`);
          
          const response = await axios({
            method: 'post',
            url: `${config.baseUrl}/chat/completions`,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${config.apiKey}`
            },
            data: {
              model: currentModel,
              messages: [
                { role: "system", content: "You are a professional Chinese Bazi and Qimen Dunjia master." },
                { role: "user", content: prompt }
              ],
              temperature: 0.7,
              max_tokens: 1500, // 减少token数量
              top_p: 0.95,
              frequency_penalty: 0.0,
              presence_penalty: 0.0
            },
            timeout: requestTimeout
          });
          
          const advice = response.data.choices[0].message.content.trim();
          console.log(`成功从 ${provider} 使用模型 ${currentModel} 获取元气锦囊`);
          return advice;
          
        } catch (e) {
          lastError = e;
          if (e.message.toLowerCase().includes("timeout")) {
            console.error(`${provider} ${currentModel} 请求超时`);
          } else {
            console.error(`使用 ${provider} ${currentModel} 失败:`, e.message);
          }
          continue;
        }
      }
      
      // 如果所有模型都失败了
      throw lastError || new Error(`提供商 ${provider} 的所有模型都失败了`);
      
    } catch (e) {
      console.error(`获取元气锦囊失败 (${provider}):`, e.message);
      throw e;
    }
  }
}

// 修改导出方式，确保能被正确识别为构造函数
module.exports = AIClient;
