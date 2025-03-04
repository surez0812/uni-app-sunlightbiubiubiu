'use strict';

const AIClient = require('./ai_client');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

// 扩展dayjs以支持时区
dayjs.extend(utc);
dayjs.extend(timezone);

exports.main = async (event, context) => {
  console.log('元气锦囊云函数开始执行，请求数据:', JSON.stringify(event));
  
  try {
    // 解析请求数据
    let data = {};
    
    // 检查event结构
    if (typeof event === 'object') {
      if (event.data) {
        console.log("使用event.data作为数据源");
        data = event.data;
      } else if (event.body) {
        console.log("使用event.body作为数据源");
        try {
          data = JSON.parse(event.body);
        } catch (e) {
          console.error("解析event.body失败:", e);
          data = event.body;
        }
      } else {
        console.log("直接使用event作为数据源");
        data = event;
      }
    }
    
    console.log("处理后的请求数据:", JSON.stringify(data));
    
    // 验证必要字段
    if (!data.birth_date) {
      console.error('缺少必要字段: birth_date，当前数据:', JSON.stringify(data));
      return {
        status: 'error',
        message: '缺少必要字段: birth_date'
      };
    }
    
    // 记录请求参数
    console.log('处理元气锦囊请求，参数:', {
      birth_date: data.birth_date,
      gender: data.gender,
      year_ganzhi: data.year_ganzhi,
      month_ganzhi: data.month_ganzhi,
      day_ganzhi: data.day_ganzhi,
      hour_ganzhi: data.hour_ganzhi,
      weather: data.weather,
      location: data.location
    });
    
    // 创建AI客户端
    const aiClient = new AIClient();
    
    // 设置超时处理
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('获取元气锦囊超时，请稍后再试'));
      }, 60000); // 60秒超时，之前是25秒
    });
    
    // 获取元气锦囊
    const advicePromise = aiClient.getDailyAdvice({
      birth_date: data.birth_date,
      gender: data.gender || '男',
      year_ganzhi: data.year_ganzhi || '甲子',
      month_ganzhi: data.month_ganzhi || '乙丑',
      day_ganzhi: data.day_ganzhi || '丙寅',
      hour_ganzhi: data.hour_ganzhi || '丁卯',
      location: data.location || '北京'
    }, data.weather || '晴');
    
    // 使用Promise.race竞争，谁先完成就返回谁的结果
    const advice = await Promise.race([advicePromise, timeoutPromise]);
    
    // 解析JSON
    let adviceObj;
    try {
      adviceObj = JSON.parse(advice);
      console.log('成功解析元气锦囊JSON');
    } catch (e) {
      console.error('解析元气锦囊JSON失败:', e);
      console.log('原始返回内容:', advice);
      
      // 尝试提取JSON部分
      const jsonMatch = advice.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          // 尝试修复可能的JSON格式问题
          let jsonStr = jsonMatch[0];
          // 处理可能导致解析错误的shechen_advice部分
          if (jsonStr.includes('"shechen_advice":') && !jsonStr.includes('"shechen_advice":"')) {
            // 尝试将非字符串格式的shechen_advice转换为字符串
            jsonStr = jsonStr.replace(/"shechen_advice":\s*(\[\{.+?\}\])/g, 
              (match, p1) => `"shechen_advice":"${p1.replace(/"/g, '\\"')}"`
            );
          }
          adviceObj = JSON.parse(jsonStr);
          console.log('成功从文本中提取并解析JSON，应用了修复');
        } catch (e2) {
          console.error('从文本中提取JSON失败:', e2);
          adviceObj = {
            daily_summary: '今日运势分析暂时无法获取，请稍后再试',
            colors_advice: '建议穿着舒适的衣物',
            touzi_advice: '投资需谨慎',
            health_advice: '保持良好作息',
            work_advice: '专注当下任务',
            love_advice: '真诚沟通很重要'
          };
        }
      } else {
        adviceObj = {
          daily_summary: '今日运势分析暂时无法获取，请稍后再试',
          colors_advice: '建议穿着舒适的衣物',
          touzi_advice: '投资需谨慎',
          health_advice: '保持良好作息',
          work_advice: '专注当下任务',
          love_advice: '真诚沟通很重要'
        };
      }
    }
    
    // 处理时辰建议
    let shechenAdvice = "[]";
    if (adviceObj.shechen_advice) {
      try {
        // 如果shechen_advice不是字符串类型，将其转为字符串
        if (typeof adviceObj.shechen_advice !== 'string') {
          shechenAdvice = JSON.stringify(adviceObj.shechen_advice);
        } else {
          shechenAdvice = adviceObj.shechen_advice;
          // 尝试解析然后再序列化，以确保是有效的JSON字符串
          JSON.parse(shechenAdvice);
        }
      } catch (e) {
        console.error('处理shechen_advice失败，使用默认值:', e);
        shechenAdvice = "[]";
      }
    } else if (adviceObj['12_shechen_lucky_score']) {
      try {
        shechenAdvice = JSON.stringify(adviceObj['12_shechen_lucky_score']);
      } catch (e) {
        console.error('处理12_shechen_lucky_score失败，使用默认值:', e);
        shechenAdvice = "[]";
      }
    }
    
    // 准备数据库存储数据
    const db = uniCloud.database();
    const dailyAdviceCollection = db.collection('daily_advice');
    
    // 创建记录
    const today = dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD');
    const result = await dailyAdviceCollection.add({
      user_id: data.user_id || 'anonymous',
      birth_date: data.birth_date,
      gender: data.gender || '男',
      year_ganzhi: data.year_ganzhi || '甲子',
      month_ganzhi: data.month_ganzhi || '乙丑',
      day_ganzhi: data.day_ganzhi || '丙寅',
      hour_ganzhi: data.hour_ganzhi || '丁卯',
      weather: data.weather || '晴',
      location: data.location || '北京',
      daily_summary: adviceObj.daily_summary || '今日运势分析暂时无法获取',
      colors_advice: adviceObj.colors_advice || '建议穿着舒适的衣物',
      touzi_advice: adviceObj.touzi_advice || '投资需谨慎',
      health_advice: adviceObj.health_advice || '保持良好作息',
      work_advice: adviceObj.work_advice || '专注当下任务',
      love_advice: adviceObj.love_advice || '真诚沟通很重要',
      shechen_advice: shechenAdvice,
      created_at: new Date(),
      date: today
    });
    
    console.log('元气锦囊云函数执行成功，返回ID:', result.id);
    
    return {
      status: 'success',
      data: {
        id: result.id,
        daily_summary: adviceObj.daily_summary || '今日运势分析暂时无法获取',
        colors_advice: adviceObj.colors_advice || '建议穿着舒适的衣物',
        touzi_advice: adviceObj.touzi_advice || '投资需谨慎',
        health_advice: adviceObj.health_advice || '保持良好作息',
        work_advice: adviceObj.work_advice || '专注当下任务',
        love_advice: adviceObj.love_advice || '真诚沟通很重要',
        shechen_advice: shechenAdvice
      }
    };
  } catch (error) {
    console.error('元气锦囊云函数执行失败:', error);
    
    return {
      status: 'error',
      message: error.message || '获取元气锦囊失败'
    };
  }
};
