<template>
  <view class="welcome-container">
    <view class="content-container">
      <view class="header">
        <view class="info-row">
          <view class="date-info">
            <text class="today-date">{{todayDate}}</text>
            <text class="birth-date" v-if="userInfo.birthday">生日：{{userInfo.birthday}}</text>
          </view>
          <view class="weather-info" v-if="weatherInfo.now">
            <view class="weather-main">
              <text class="temp">{{weatherInfo.now.temp}}°</text>
              <text class="weather-desc">{{weatherInfo.now.text}}</text>
            </view>
            <view class="weather-detail">
              <text>{{weatherInfo.now.windDir}} {{weatherInfo.now.windScale}}级</text>
              <text>湿度 {{weatherInfo.now.humidity}}%</text>
            </view>
          </view>
        </view>
      </view>
      
      <view class="bazi-info" v-if="todayAdvice.bazi">
        <view class="section">
          <view class="section-title">个人信息</view>
          <view class="bazi-grid">
            <view v-if="todayAdvice.bazi && todayAdvice.bazi.birth" class="bazi-card">
              <view class="bazi-row">
                <view class="bazi-cell">
                  <text class="bazi-label">年柱</text>
                  <view class="bazi-chars" v-if="todayAdvice.bazi.birth.year">
                    <text :style="{color: getWuxingColor(tianganWuxing[todayAdvice.bazi.birth.year.text[0]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.birth.year.text[0]}}
                    </text>
                    <text :style="{color: getWuxingColor(dizhiWuxing[todayAdvice.bazi.birth.year.text[1]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.birth.year.text[1]}}
                    </text>
                  </view>
                </view>
                <view class="bazi-cell">
                  <text class="bazi-label">月柱</text>
                  <view class="bazi-chars" v-if="todayAdvice.bazi.birth.month">
                    <text :style="{color: getWuxingColor(tianganWuxing[todayAdvice.bazi.birth.month.text[0]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.birth.month.text[0]}}
                    </text>
                    <text :style="{color: getWuxingColor(dizhiWuxing[todayAdvice.bazi.birth.month.text[1]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.birth.month.text[1]}}
                    </text>
                  </view>
                </view>
                <view class="bazi-cell">
                  <text class="bazi-label">日柱</text>
                  <view class="bazi-chars" v-if="todayAdvice.bazi.birth.day">
                    <text :style="{color: getWuxingColor(tianganWuxing[todayAdvice.bazi.birth.day.text[0]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.birth.day.text[0]}}
                    </text>
                    <text :style="{color: getWuxingColor(dizhiWuxing[todayAdvice.bazi.birth.day.text[1]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.birth.day.text[1]}}
                    </text>
                  </view>
                </view>
                <view class="bazi-cell">
                  <text class="bazi-label">时柱</text>
                  <view class="bazi-chars" v-if="todayAdvice.bazi.birth.hour">
                    <text :style="{color: getWuxingColor(tianganWuxing[todayAdvice.bazi.birth.hour.text[0]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.birth.hour.text[0]}}
                    </text>
                    <text :style="{color: getWuxingColor(dizhiWuxing[todayAdvice.bazi.birth.hour.text[1]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.birth.hour.text[1]}}
                    </text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        
        <view class="section">
          <view class="section-title">今日信息</view>
          <view class="bazi-grid">
            <view v-if="todayAdvice.bazi && todayAdvice.bazi.today" class="bazi-card">
              <view class="bazi-row">
                <view class="bazi-cell">
                  <text class="bazi-label">年柱</text>
                  <view class="bazi-chars" v-if="todayAdvice.bazi.today.year">
                    <text :style="{color: getWuxingColor(tianganWuxing[todayAdvice.bazi.today.year.text[0]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.today.year.text[0]}}
                    </text>
                    <text :style="{color: getWuxingColor(dizhiWuxing[todayAdvice.bazi.today.year.text[1]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.today.year.text[1]}}
                    </text>
                  </view>
                </view>
                <view class="bazi-cell">
                  <text class="bazi-label">月柱</text>
                  <view class="bazi-chars" v-if="todayAdvice.bazi.today.month">
                    <text :style="{color: getWuxingColor(tianganWuxing[todayAdvice.bazi.today.month.text[0]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.today.month.text[0]}}
                    </text>
                    <text :style="{color: getWuxingColor(dizhiWuxing[todayAdvice.bazi.today.month.text[1]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.today.month.text[1]}}
                    </text>
                  </view>
                </view>
                <view class="bazi-cell">
                  <text class="bazi-label">日柱</text>
                  <view class="bazi-chars" v-if="todayAdvice.bazi.today.day">
                    <text :style="{color: getWuxingColor(tianganWuxing[todayAdvice.bazi.today.day.text[0]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.today.day.text[0]}}
                    </text>
                    <text :style="{color: getWuxingColor(dizhiWuxing[todayAdvice.bazi.today.day.text[1]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.today.day.text[1]}}
                    </text>
                  </view>
                </view>
                <view class="bazi-cell">
                  <text class="bazi-label">时柱</text>
                  <view class="bazi-chars" v-if="todayAdvice.bazi.today.hour">
                    <text :style="{color: getWuxingColor(tianganWuxing[todayAdvice.bazi.today.hour.text[0]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.today.hour.text[0]}}
                    </text>
                    <text :style="{color: getWuxingColor(dizhiWuxing[todayAdvice.bazi.today.hour.text[1]]), textShadow: '0 0 3px rgba(0,0,0,0.1)'}" class="bazi-char">
                      {{todayAdvice.bazi.today.hour.text[1]}}
                    </text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      
      <view class="advice-container" v-if="userInfo.birthday">
        <view class="advice-card luck-card">
          <view class="section-title">今日心情</view>
          <text class="content">{{todayAdvice.luck || '加载中...'}}</text>
        </view>
        
        <view class="hourly-fortune" v-if="todayAdvice.hourlyFortune">
          <view class="section-title">心情火力值</view>
          <scroll-view class="fortune-chart" scroll-x="true">
            <view class="chart-container">
              <view class="fortune-bar" v-for="(item, index) in todayAdvice.hourlyFortune" :key="index">
                <view class="bar-wrapper">
                  <view class="bar" :class="[
                    item.score >= 90 ? 'mood-hot' : 
                    item.score >= 80 ? 'mood-warm' : 
                    item.score >= 70 ? 'mood-mild' : 
                    'mood-cool'
                  ]" :style="{ height: item.score + '%' }"></view>
                </view>
                <text class="time-label">{{item.time}}时</text>
                <text class="score-label">{{item.score}}%</text>
                <text class="advice-label">{{item.advice}}</text>
              </view>
            </view>
          </scroll-view>
        </view>
        
        <view class="advice-grid">
          <view class="advice-card">
            <view class="section-title">穿搭色彩</view>
            <text class="content">{{todayAdvice.color || '加载中...'}}</text>
          </view>
          
          <view class="advice-card">
            <view class="section-title">工作建议</view>
            <text class="content">{{todayAdvice.career || '加载中...'}}</text>
          </view>
          
          <view class="advice-card">
            <view class="section-title">社交建议</view>
            <text class="content">{{todayAdvice.love || '加载中...'}}</text>
          </view>
          
          <view class="advice-card">
            <view class="section-title">健康提醒</view>
            <text class="content">{{todayAdvice.health || '加载中...'}}</text>
          </view>
          
          <view class="advice-card">
            <view class="section-title">理财提示</view>
            <text class="content">{{todayAdvice.investment || '加载中...'}}</text>
          </view>
          
          <view class="advice-card">
            <view class="section-title">饮食建议</view>
            <text class="content">{{todayAdvice.food || '加载中...'}}</text>
          </view>
        </view>
      </view>
      
      <view class="disclaimer">
        <text>温馨提示：本应用提供的建议仅供参考，不作为决策依据。请根据实际情况合理安排。</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      weatherInfo: {},
      todayAdvice: {},
      loading: true,
      todayDate: new Date().toLocaleDateString(),
      tianganWuxing: {
        '甲': '木',
        '乙': '木',
        '丙': '火',
        '丁': '火',
        '戊': '土',
        '己': '土',
        '庚': '金',
        '辛': '金',
        '壬': '水',
        '癸': '水'
      },
      dizhiWuxing: {
        '子': '水',
        '丑': '土',
        '寅': '木',
        '卯': '木',
        '辰': '土',
        '巳': '火',
        '午': '火',
        '未': '土',
        '申': '金',
        '酉': '金',
        '戌': '土',
        '亥': '水'
      }
    }
  },
  onLoad() {
    this.initData()
    
    // 调试五行类名
    console.log('五行类名测试:');
    console.log('木:', this.getWuxingClass('木'));
    console.log('火:', this.getWuxingClass('火'));
    console.log('土:', this.getWuxingClass('土'));
    console.log('金:', this.getWuxingClass('金'));
    console.log('水:', this.getWuxingClass('水'));
  },
  onShow() {
    // 页面显示时刷新数据
    this.refreshData();
  },
  methods: {
    async refreshData() {
      try {
        // 获取最新的用户信息
        const db = uniCloud.database()
        console.log('开始查询最新用户信息...')
        
        // 直接获取所有记录
        const userInfoRes = await db.collection('user_info').get()
        
        if (userInfoRes.result.data && userInfoRes.result.data.length > 0) {
          // 手动查找ID为 "67be6402f2949cf72166b325" 的记录
          const targetRecord = userInfoRes.result.data.find(record => 
            record._id === "67be6402f2949cf72166b325"
          );
          
          let newUserInfo;
          
          if (targetRecord) {
            newUserInfo = targetRecord;
          } else {
            // 如果找不到特定ID的记录，则使用排序后的第一条
            console.log('未找到目标记录，使用排序后的第一条');
            
            // 客户端排序，确保获取最新记录
            const sortedData = userInfoRes.result.data.sort((a, b) => {
              // 确保数值比较，将字符串转换为数字
              const dateA = typeof a.create_date === 'string' ? parseInt(a.create_date) : a.create_date;
              const dateB = typeof b.create_date === 'string' ? parseInt(b.create_date) : b.create_date;
              
              return dateB - dateA;
            });
            
            newUserInfo = sortedData[0];
          }
          
          // 检查生日信息是否有变化
          if (this.userInfo.birthday !== newUserInfo.birthday || 
              this.userInfo.birthTime !== newUserInfo.birthTime) {
            console.log('生日信息已更新，旧信息:', this.userInfo.birthday, this.userInfo.birthTime, 
                        '新信息:', newUserInfo.birthday, newUserInfo.birthTime);
            this.userInfo = newUserInfo;
            
            // 重新获取今日建议
            if (this.userInfo.birthday) {
              await this.getTodayAdvice();
            }
          }
        } else {
          console.log('未找到用户信息记录')
        }
      } catch (error) {
        console.error('刷新数据失败:', error);
      }
    },
    async initData() {
      try {
        // 获取用户信息
        const db = uniCloud.database()
        console.log('初始化：开始查询用户信息...')
        
        // 直接获取所有记录
        const userInfoRes = await db.collection('user_info').get()
        
        if (userInfoRes.result.data && userInfoRes.result.data.length > 0) {
          // 手动查找ID为 "67be6402f2949cf72166b325" 的记录
          const targetRecord = userInfoRes.result.data.find(record => 
            record._id === "67be6402f2949cf72166b325"
          );
          
          if (targetRecord) {
            this.userInfo = targetRecord;
          } else {
            // 如果找不到特定ID的记录，则使用排序后的第一条
            console.log('未找到目标记录，使用排序后的第一条');
            
            // 客户端排序，确保获取最新记录
            const sortedData = userInfoRes.result.data.sort((a, b) => {
              // 确保数值比较，将字符串转换为数字
              const dateA = typeof a.create_date === 'string' ? parseInt(a.create_date) : a.create_date;
              const dateB = typeof b.create_date === 'string' ? parseInt(b.create_date) : b.create_date;
              
              return dateB - dateA;
            });
            
            this.userInfo = sortedData[0];
          }
          
          console.log('初始化：生日信息:', this.userInfo.birthday, this.userInfo.birthTime)
          
          // 获取今日建议
          if (this.userInfo.birthday) {
            await this.getTodayAdvice()
          } else {
            console.log('初始化：生日信息不完整，无法获取今日建议')
          }
          
          // 获取位置和天气信息
          await this.getLocation()
        } else {
          // 如果没有用户信息，跳转到生日设置页面
          uni.showToast({
            title: '请先设置生日信息',
            icon: 'none',
            duration: 2000
          })
          setTimeout(() => {
            uni.navigateTo({
              url: '/pages/birthday/birthday'
            })
          }, 1000)
        }
      } catch (error) {
        console.error('初始化数据失败:', error)
        uni.showToast({
          title: '数据加载失败',
          icon: 'none'
        })
      } finally {
        this.loading = false
      }
    },
    
    async getTodayAdvice() {
      if (!this.userInfo.birthday || !this.userInfo.birthTime) {
        console.log('没有生日信息，无法获取建议')
        return
      }

      try {
        console.log('开始获取今日建议，参数:', {
          birthday: this.userInfo.birthday,
          birthTime: this.userInfo.birthTime
        })

        const res = await uniCloud.callFunction({
          name: 'getTodayAdvice',
          data: { 
            birthday: this.userInfo.birthday,
            birthTime: this.userInfo.birthTime
          }
        })
        
        console.log('今日建议响应:', res)
        
        if (res.result && res.result.success) {
          console.log('获取到今日建议:', res.result.data)
          this.todayAdvice = res.result.data
          
          // 调试五行数据
          if (this.todayAdvice.bazi && this.todayAdvice.bazi.birth) {
            console.log('出生年干支五行:', this.todayAdvice.bazi.birth.year)
            console.log('出生月干支五行:', this.todayAdvice.bazi.birth.month)
            console.log('出生日干支五行:', this.todayAdvice.bazi.birth.day)
            console.log('出生时干支五行:', this.todayAdvice.bazi.birth.hour)
          }
        } else {
          const error = res.result ? res.result.error : '未知错误'
          console.error('获取今日建议失败:', error)
          uni.showToast({
            title: '获取今日建议失败',
            icon: 'none',
            duration: 2000
          })
        }
      } catch (error) {
        console.error('获取今日建议失败:', error)
        uni.showToast({
          title: '获取今日建议失败，请重试',
          icon: 'none',
          duration: 2000
        })
      }
    },
    
    async getLocation() {
      try {
        // 检查是否有位置权限
        await uni.authorize({
          scope: 'scope.userLocation'
        });
        
        // 获取位置信息
        const locationRes = await uni.getLocation({
          type: 'gcj02'
        });
        
        console.log('获取到位置信息:', locationRes);
        
        if (!locationRes.latitude || !locationRes.longitude) {
          console.error('位置信息不完整');
          throw new Error('获取位置信息失败');
        }
        
        // 调用天气云函数
        const weatherRes = await uniCloud.callFunction({
          name: 'getWeather',
          data: {
            latitude: Number(locationRes.latitude),
            longitude: Number(locationRes.longitude)
          }
        });
        
        console.log('天气响应:', weatherRes);
        
        if (weatherRes.result && weatherRes.result.success && weatherRes.result.now) {
          this.weatherInfo = weatherRes.result;
          console.log('成功获取天气信息:', this.weatherInfo);
        } else {
          const error = weatherRes.result ? weatherRes.result.error : '未知错误';
          console.error('获取天气失败:', error);
          // 使用默认位置重试
          await this.getWeatherWithDefaultLocation();
        }
      } catch (error) {
        console.log('获取位置或天气失败：', error);
        // 位置获取失败时，使用默认位置
        await this.getWeatherWithDefaultLocation();
      }
    },

    async getWeatherWithDefaultLocation() {
      try {
        console.log('使用默认位置获取天气');
        const weatherRes = await uniCloud.callFunction({
          name: 'getWeather',
          data: {
            // 显式传入默认位置信息
            latitude: 39.90960456049752,
            longitude: 116.3972282409668,
            city: '北京市'
          }
        });
        
        console.log('默认位置天气响应:', weatherRes);
        
        if (weatherRes.result && weatherRes.result.success && weatherRes.result.now) {
          this.weatherInfo = weatherRes.result;
          console.log('成功获取默认位置天气信息:', this.weatherInfo);
        } else {
          const error = weatherRes.result ? weatherRes.result.error : '未知错误';
          console.error('获取默认位置天气失败:', error);
          uni.showToast({
            title: error.includes('API') ? '天气服务暂时不可用' : '获取天气信息失败',
            icon: 'none',
            duration: 2000
          });
        }
      } catch (error) {
        console.error('获取天气失败:', error);
        uni.showToast({
          title: '获取天气信息失败',
          icon: 'none',
          duration: 2000
        });
      }
    },
    
    getWuxingClass(wuxing) {
      console.log('获取五行类名，输入:', wuxing, '类型:', typeof wuxing);
      
      if (!wuxing) {
        console.log('五行为空');
        return 'none';
      }
      
      // 确保输入是字符串
      const wuxingStr = String(wuxing).trim();
      
      switch (wuxingStr) {
        case '木':
          return 'wuxing-mu';
        case '火':
          return 'wuxing-huo';
        case '土':
          return 'wuxing-tu';
        case '金':
          return 'wuxing-jin';
        case '水':
          return 'wuxing-shui';
        default:
          console.log('未匹配到五行:', wuxingStr);
          return 'none';
      }
    },
    
    getWuxingColor(wuxing) {
      console.log('获取五行颜色，输入:', wuxing, '类型:', typeof wuxing);
      
      if (!wuxing) {
        console.log('五行为空');
        return '';
      }
      
      // 确保输入是字符串
      const wuxingStr = String(wuxing).trim();
      
      switch (wuxingStr) {
        case '木':
          return '#4CD964'; // 果冻绿
        case '火':
          return '#FF6B6B'; // 果冻红
        case '土':
          return '#A0522D'; // 棕色果冻色
        case '金':
          return '#FFD700'; // 金色果冻色
        case '水':
          return '#56CCF2'; // 果冻浅蓝
        default:
          console.log('未匹配到五行:', wuxingStr);
          return '';
      }
    },
    
    goToEditBirthday() {
      uni.navigateTo({
        url: '/pages/birthday/birthday'
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/theme.scss';

.welcome-container {
  min-height: 100vh;
  background-color: $color-bg-primary;
  
  .content-container {
    padding: $spacing-md;
    display: flex;
    flex-direction: column;
  }
  
  .header {
    background: $color-primary-gradient;
    border-radius: $radius-lg;
    padding: $spacing-xl;
    margin-bottom: $spacing-xl;
    box-shadow: $shadow-md;
    position: relative;
    overflow: hidden;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.05));
      z-index: 1;
      border-radius: $radius-full;
    }
    
    .info-row {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      
      .date-info {
        .today-date {
          font-size: $font-xl;
          color: #fff;
          font-weight: $weight-semibold;
          margin-bottom: $spacing-xs;
          display: block;
          text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
        }
        
        .birth-date {
          font-size: $font-sm;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
        }
      }
      
      .weather-info {
        text-align: right;
        
        .weather-main {
          margin-bottom: $spacing-xs;
          
          .temp {
            font-size: $font-lg;
            color: #fff;
            font-weight: $weight-semibold;
            margin-right: $spacing-xs;
            text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
          }
          
          .weather-desc {
            font-size: $font-lg;
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
          }
        }
        
        .weather-detail {
          font-size: $font-xs;
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
          
          text {
            margin-left: $spacing-sm;
            
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
  
  .bazi-info {
    margin-bottom: $spacing-sm;
    
    .section {
      margin-bottom: $spacing-sm;
      
      .section-title {
        font-size: $font-md;
        color: $color-text-secondary;
        margin-bottom: $spacing-xs;
      }
      
      .bazi-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: $spacing-sm;
        
        .bazi-card {
          background: $color-bg-card;
          border-radius: $radius-lg;
          padding: $spacing-sm;
          box-shadow: $shadow-md;
          
          .bazi-row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: $spacing-sm;
            
            .bazi-cell {
              text-align: center;
              
              .bazi-label {
                font-size: $font-xs;
                color: $color-text-quaternary;
                margin-bottom: 0;
                display: block;
              }
              
              .bazi-chars {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: $font-md;
                font-weight: $weight-semibold;
                
                .bazi-char {
                  margin: 0 $spacing-xs;
                  font-size: 20px;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }
  
  .advice-card {
    background: $color-bg-card;
    border-radius: $radius-lg;
    padding: $spacing-xl;
    margin-bottom: $spacing-lg;
    box-shadow: $shadow-md;
    
    .section-title {
      font-size: $font-lg;
      color: $color-text-primary;
      font-weight: $weight-semibold;
      margin-bottom: $spacing-lg;
    }
    
    .content {
      font-size: $font-md;
      color: $color-text-secondary;
      line-height: 1.6;
    }
  }
  
  .fortune-chart {
    background: $color-bg-card;
    border-radius: $radius-lg;
    padding: $spacing-xl;
    margin-bottom: $spacing-lg;
    box-shadow: $shadow-md;
    overflow: hidden;
    
    .section-title {
      font-size: $font-lg;
      color: $color-text-primary;
      font-weight: $weight-semibold;
      margin-bottom: $spacing-lg;
    }
    
    .chart-container {
      display: flex;
      padding: $spacing-lg 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      
      &::-webkit-scrollbar {
        display: none;
      }
      
      .fortune-bar {
        flex: 0 0 auto;
        width: 100rpx;
        margin-right: $spacing-md;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        &:last-child {
          margin-right: 0;
        }
        
        .bar-wrapper {
          width: 40rpx;
          height: 160rpx;
          background: rgba(0, 0, 0, 0.05);
          border-radius: $radius-full;
          position: relative;
          overflow: hidden;
          margin-bottom: $spacing-sm;
          box-shadow: inset 0 2rpx 6rpx rgba(0, 0, 0, 0.1);
          
          &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%;
            background: linear-gradient(to top, rgba(255, 255, 255, 0.1), transparent);
            z-index: 1;
            border-radius: $radius-full;
          }
          
          .bar {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border-radius: $radius-full;
            animation: pulse 2s infinite;
            
            @keyframes pulse {
              0% {
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
              }
              70% {
                box-shadow: 0 0 0 6rpx rgba(0, 0, 0, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
              }
            }
            
            &.mood-hot {
              background: linear-gradient(to top, $color-system-red, lighten($color-system-red, 10%));
              box-shadow: 0 4rpx 8rpx rgba($color-system-red, 0.3);
              animation: flame-red 1.5s infinite alternate;
            }
            
            &.mood-warm {
              background: linear-gradient(to top, $color-system-orange, lighten($color-system-orange, 10%));
              box-shadow: 0 4rpx 8rpx rgba($color-system-orange, 0.3);
              animation: flame-orange 1.5s infinite alternate;
            }
            
            &.mood-mild {
              background: linear-gradient(to top, $color-system-yellow, lighten($color-system-yellow, 10%));
              box-shadow: 0 4rpx 8rpx rgba($color-system-yellow, 0.3);
              animation: flame-yellow 1.5s infinite alternate;
            }
            
            &.mood-cool {
              background: linear-gradient(to top, $color-system-blue, lighten($color-system-blue, 10%));
              box-shadow: 0 4rpx 8rpx rgba($color-system-blue, 0.3);
              animation: flame-blue 1.5s infinite alternate;
            }
            
            @keyframes flame-red {
              0% {
                transform: scaleY(0.95);
                box-shadow: 0 0 10rpx rgba($color-system-red, 0.5);
              }
              100% {
                transform: scaleY(1.05);
                box-shadow: 0 0 20rpx rgba($color-system-red, 0.7);
              }
            }
            
            @keyframes flame-orange {
              0% {
                transform: scaleY(0.95);
                box-shadow: 0 0 10rpx rgba($color-system-orange, 0.5);
              }
              100% {
                transform: scaleY(1.05);
                box-shadow: 0 0 20rpx rgba($color-system-orange, 0.7);
              }
            }
            
            @keyframes flame-yellow {
              0% {
                transform: scaleY(0.95);
                box-shadow: 0 0 10rpx rgba($color-system-yellow, 0.5);
              }
              100% {
                transform: scaleY(1.05);
                box-shadow: 0 0 20rpx rgba($color-system-yellow, 0.7);
              }
            }
            
            @keyframes flame-blue {
              0% {
                transform: scaleY(0.95);
                box-shadow: 0 0 10rpx rgba($color-system-blue, 0.5);
              }
              100% {
                transform: scaleY(1.05);
                box-shadow: 0 0 20rpx rgba($color-system-blue, 0.7);
              }
            }
          }
        }
        
        .time-label {
          font-size: $font-xs;
          color: $color-text-quaternary;
          margin-bottom: $spacing-2xs;
        }
        
        .score-label {
          font-size: $font-2xs;
          color: $color-text-tertiary;
          margin-bottom: $spacing-2xs;
        }
        
        .advice-label {
          font-size: $font-xs;
          color: $color-text-secondary;
          text-align: center;
          width: 80rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  
  .advice-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-lg;
    
    .advice-card {
      .section-title {
        font-size: $font-md;
      }
    }
  }
  
  .disclaimer {
    margin: $spacing-2xl 0;
    padding: $spacing-lg;
    text-align: center;
    font-size: $font-xs;
    color: $color-text-quaternary;
    background: rgba($color-bg-card, 0.8);
    border-radius: $radius-lg;
    backdrop-filter: blur(10px);
  }
  
  .ganzhi-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $font-lg;
    font-weight: $weight-semibold;
    
    text {
      margin: 0 $spacing-xs;
    }
    
    .wuxing-mu {
      color: $color-system-wood;
    }
    
    .wuxing-huo {
      color: $color-system-fire;
    }
    
    .wuxing-tu {
      color: $color-system-earth;
    }
    
    .wuxing-jin {
      color: $color-system-gold;
    }
    
    .wuxing-shui {
      color: $color-system-water;
    }
  }
}
</style>