'use strict';

const moment = require('moment-timezone');
const { Solar, Lunar } = require('lunar-javascript');

// 天干
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
// 地支
const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
// 时辰对应的地支
const HOUR_TO_BRANCH = {
  23: '子', 0: '子', // 23:00-00:59
  1: '丑', 2: '丑',  // 01:00-02:59
  3: '寅', 4: '寅',  // 03:00-04:59
  5: '卯', 6: '卯',  // 05:00-06:59
  7: '辰', 8: '辰',  // 07:00-08:59
  9: '巳', 10: '巳', // 09:00-10:59
  11: '午', 12: '午', // 11:00-12:59
  13: '未', 14: '未', // 13:00-14:59
  15: '申', 16: '申', // 15:00-16:59
  17: '酉', 18: '酉', // 17:00-18:59
  19: '戌', 20: '戌', // 19:00-20:59
  21: '亥', 22: '亥'  // 21:00-22:59
};

// 天干地支转换为节气季节信息
const SEASON_MAP = {
  '春': ['寅', '卯', '辰'],
  '夏': ['巳', '午', '未'],
  '秋': ['申', '酉', '戌'],
  '冬': ['亥', '子', '丑']
};

// 根据季节推荐颜色
const SEASON_COLORS = {
  '春': ['嫩绿色', '粉色', '淡黄色'],
  '夏': ['白色', '浅蓝色', '淡紫色'],
  '秋': ['橙色', '棕色', '米色'],
  '冬': ['深蓝色', '灰色', '黑色']
};

// 时段建议
const TIME_ADVICE = {
  '子': { activity: '睡眠', advice: '充分休息' },
  '丑': { activity: '早起', advice: '规划一天' },
  '寅': { activity: '晨练', advice: '锻炼身体' },
  '卯': { activity: '学习', advice: '专注效率高' },
  '辰': { activity: '工作', advice: '处理要务' },
  '巳': { activity: '会议', advice: '沟通顺畅' },
  '午': { activity: '用餐', advice: '注意营养' },
  '未': { activity: '思考', advice: '规划未来' },
  '申': { activity: '运动', advice: '放松身心' },
  '酉': { activity: '总结', advice: '回顾提升' },
  '戌': { activity: '休闲', advice: '享受生活' },
  '亥': { activity: '阅读', advice: '充实自己' }
};

// 计算年干支
function getYearGanzhi(year) {
  const offset = (year - 4) % 60;
  const stemIndex = offset % 10;
  const branchIndex = offset % 12;
  return {
    stem: HEAVENLY_STEMS[stemIndex],
    branch: EARTHLY_BRANCHES[branchIndex]
  };
}

// 计算月干支
function getMonthGanzhi(yearStem, lunarMonth) {
  // 根据年干确定月干的起始偏移
  const stemOffset = {
    '甲': 0, '己': 0,
    '乙': 2, '庚': 2,
    '丙': 4, '辛': 4,
    '丁': 6, '壬': 6,
    '戊': 8, '癸': 8
  }[yearStem];
  
  // 计算月干和月支
  const stemIndex = (stemOffset + lunarMonth - 1) % 10;
  const branchIndex = (lunarMonth + 1) % 12;
  
  return {
    stem: HEAVENLY_STEMS[stemIndex],
    branch: EARTHLY_BRANCHES[branchIndex]
  };
}

// 计算日干支
function getDayGanzhi(date) {
  const solar = Solar.fromDate(date);
  const lunar = solar.getLunar();
  return {
    stem: lunar.getDayInGanZhi().substring(0, 1),
    branch: lunar.getDayInGanZhi().substring(1)
  };
}

// 计算时干支
function getHourGanzhi(dayStem, hour) {
  const branch = HOUR_TO_BRANCH[hour];
  const branchIndex = EARTHLY_BRANCHES.indexOf(branch);
  const stemOffset = (HEAVENLY_STEMS.indexOf(dayStem) * 2) % 10;
  const stemIndex = (stemOffset + Math.floor((hour + 1) / 2)) % 10;
  
  return {
    stem: HEAVENLY_STEMS[stemIndex],
    branch: branch
  };
}

// 根据地支获取季节
function getSeason(branch) {
  for (const [season, branches] of Object.entries(SEASON_MAP)) {
    if (branches.includes(branch)) {
      return season;
    }
  }
  return '春'; // 默认返回春季
}

// 获取时段建议
function getTimeAdvice(branch) {
  return TIME_ADVICE[branch] || { activity: '休息', advice: '调整状态' };
}

// 生成每日建议
function generateDailyAdvice(birthGanzhi, todayGanzhi) {
  const season = getSeason(todayGanzhi.month.branch);
  const colors = SEASON_COLORS[season];
  const colorIndex = Math.floor(Math.random() * colors.length);
  const timeAdvice = getTimeAdvice(todayGanzhi.hour.branch);
  
  const moodLevels = ['愉悦', '平和', '舒适', '安静'];
  const moodIndex = Math.floor(Math.random() * moodLevels.length);
  
  return {
    mood: moodLevels[moodIndex],
    color: colors[colorIndex],
    career: `建议${timeAdvice.activity}，${timeAdvice.advice}`,
    social: '保持开放和友善的态度，与他人友好交流',
    health: '规律作息，适量运动，注意饮食均衡',
    finance: '理性消费，合理规划支出',
    diet: '根据季节选择应季食材，注意营养均衡'
  };
}

// 计算时段分数
function calculateHourScore(birthGanzhi, hourGanzhi) {
  const timeAdvice = getTimeAdvice(hourGanzhi.branch);
  const score = Math.floor(Math.random() * 30) + 70; // 70-100之间的随机分数
  
  return {
    time: hourGanzhi.branch,
    score: score,
    advice: timeAdvice.activity
  };
}

// 运势分析逻辑
function analyzeFortune(birthGanzhi, todayGanzhi) {
  // 简化版的运势分析算法
  const luckLevels = ['大吉', '吉', '平', '凶'];
  const colors = ['红色', '橙色', '绿色', '蓝色'];
  const advices = {
    career: ['积极进取', '稳步发展', '保持现状', '谨慎行事'],
    love: ['感情甜蜜', '关系融洽', '平淡相处', '注意沟通'],
    health: ['精力充沛', '状态良好', '注意休息', '多加保养'],
    investment: ['大胆投资', '适度投资', '谨慎投资', '避免投资'],
    food: ['营养丰富', '均衡饮食', '清淡为主', '少食多餐']
  };

  // 这里我们用随机数作为示例，实际可以根据八字比较进一步调整逻辑
  const luckIndex = Math.floor(Math.random() * luckLevels.length);
  
  return {
    luck: luckLevels[luckIndex],
    color: colors[luckIndex],
    career: advices.career[luckIndex],
    love: advices.love[luckIndex],
    health: advices.health[luckIndex],
    investment: advices.investment[luckIndex],
    food: advices.food[luckIndex]
  };
}

exports.main = async (event, context) => {
  try {
    const { birthday, birthTime } = event;
    
    if (!birthday || !birthTime) {
      return {
        code: -1,
        msg: '生日或时间参数缺失'
      };
    }

    // 解析生日和时间
    const [birthYear, birthMonth, birthDay] = birthday.split('-').map(Number);
    const birthHour = parseInt(birthTime.split(':')[0]);
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    
    // 获取出生时的八字
    const birthSolar = Solar.fromDate(birthDate);
    const birthLunar = birthSolar.getLunar();
    
    const birthYearGanzhi = getYearGanzhi(birthYear);
    const birthMonthGanzhi = getMonthGanzhi(birthYearGanzhi.stem, birthLunar.getMonth());
    const birthDayGanzhi = getDayGanzhi(birthDate);
    const birthHourGanzhi = getHourGanzhi(birthDayGanzhi.stem, birthHour);
    
    // 获取今日八字
    const today = new Date();
    const todaySolar = Solar.fromDate(today);
    const todayLunar = todaySolar.getLunar();
    
    const todayYearGanzhi = getYearGanzhi(today.getFullYear());
    const todayMonthGanzhi = getMonthGanzhi(todayYearGanzhi.stem, todayLunar.getMonth());
    const todayDayGanzhi = getDayGanzhi(today);
    const currentHour = today.getHours();
    const todayHourGanzhi = getHourGanzhi(todayDayGanzhi.stem, currentHour);
    
    // 获取用户生日信息
    const db = uniCloud.database()
    const userInfo = await db.collection('user_info').limit(1).get()
    
    // 计算12时辰运势
    const hourlyFortune = [];
    for (let hour = 0; hour < 24; hour++) {
      const hourGanzhi = getHourGanzhi(todayDayGanzhi.stem, hour);
      const score = calculateHourScore({
        year: birthYearGanzhi,
        month: birthMonthGanzhi,
        day: birthDayGanzhi,
        hour: birthHourGanzhi
      }, hourGanzhi);
      
      if (hour % 2 === 0) { // 每2小时一组
        hourlyFortune.push(score);
      }
    }

    // 本地运势分析
    const fortune = analyzeFortune(
      { year: birthYearGanzhi, month: birthMonthGanzhi, day: birthDayGanzhi, hour: birthHourGanzhi },
      { year: todayYearGanzhi, month: todayMonthGanzhi, day: todayDayGanzhi }
    );

    // 生成建议
    const advice = generateDailyAdvice(
      { year: birthYearGanzhi, month: birthMonthGanzhi, day: birthDayGanzhi, hour: birthHourGanzhi },
      { year: todayYearGanzhi, month: todayMonthGanzhi, day: todayDayGanzhi, hour: todayHourGanzhi }
    );

    return {
      code: 0,
      date: new Date().toLocaleDateString(),
      luck: advice.mood,
      color: advice.color,
      career: advice.career,
      love: advice.social,
      health: advice.health,
      investment: advice.finance,
      food: advice.diet,
      bazi: {
        birth: {
          year: `${birthYearGanzhi.stem}${birthYearGanzhi.branch}`,
          month: `${birthMonthGanzhi.stem}${birthMonthGanzhi.branch}`,
          day: `${birthDayGanzhi.stem}${birthDayGanzhi.branch}`,
          hour: `${birthHourGanzhi.stem}${birthHourGanzhi.branch}`
        },
        today: {
          year: `${todayYearGanzhi.stem}${todayYearGanzhi.branch}`,
          month: `${todayMonthGanzhi.stem}${todayMonthGanzhi.branch}`,
          day: `${todayDayGanzhi.stem}${todayDayGanzhi.branch}`,
          hour: `${todayHourGanzhi.stem}${todayHourGanzhi.branch}`
        }
      },
      hourlyFortune
    };
    
  } catch (error) {
    console.error('获取建议失败:', error);
    
    return {
      code: -1,
      msg: error.message,
      date: new Date().toLocaleDateString(),
      luck: '平和',
      color: '素雅色系',
      career: '按时作息，规律工作',
      love: '保持平和心态',
      health: '规律作息，适量运动',
      investment: '理性消费',
      food: '清淡饮食'
    };
  }
};