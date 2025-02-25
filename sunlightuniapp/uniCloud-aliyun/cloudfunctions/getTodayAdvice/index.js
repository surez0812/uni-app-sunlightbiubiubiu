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

// 计算时辰运势分数
function calculateHourScore(birthGanzhi, hourGanzhi) {
  // 这里实现一个简单的算法，实际项目中可以根据专业的八字算法来计算
  const score = Math.floor(Math.random() * 60) + 40; // 40-100之间的随机分数
  return {
    time: hourGanzhi.branch,
    score: score,
    advice: score >= 80 ? '大吉' : score >= 60 ? '吉' : '平'
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

    return {
      code: 0,
      date: new Date().toLocaleDateString(),
      ...fortune,
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
    console.error('获取运势失败:', error);
    
    return {
      code: -1,
      msg: error.message,
      date: new Date().toLocaleDateString(),
      luck: '平平',
      color: '白色',
      career: '事业运平稳',
      love: '感情运平稳',
      health: '保持良好的作息习惯',
      investment: '投资需谨慎',
      food: '清淡饮食为主'
    };
  }
};