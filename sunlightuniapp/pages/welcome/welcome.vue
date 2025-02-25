<template>
  <view class="page-container">
    <view class="welcome-header">
      <text class="title">每日生活指南</text>
      <view class="user-info" v-if="userInfo.birthday">
        <text class="subtitle">您的生日：{{userInfo.birthday}} {{userInfo.birthTime}}</text>
        <text class="date">今日日期：{{todayDate}}</text>
      </view>
    </view>
    
    <view class="bazi-info" v-if="todayAdvice.bazi">
      <view class="section">
        <view class="title">个人信息</view>
        <view class="pillars">
          <view class="pillar">
            <text>年</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.birth && todayAdvice.bazi.birth.year || '--'}}</text>
          </view>
          <view class="pillar">
            <text>月</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.birth && todayAdvice.bazi.birth.month || '--'}}</text>
          </view>
          <view class="pillar">
            <text>日</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.birth && todayAdvice.bazi.birth.day || '--'}}</text>
          </view>
          <view class="pillar">
            <text>时</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.birth && todayAdvice.bazi.birth.hour || '--'}}</text>
          </view>
        </view>
      </view>
      
      <view class="section">
        <view class="title">今日节气信息</view>
        <view class="pillars">
          <view class="pillar">
            <text>年</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.today && todayAdvice.bazi.today.year || '--'}}</text>
          </view>
          <view class="pillar">
            <text>月</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.today && todayAdvice.bazi.today.month || '--'}}</text>
          </view>
          <view class="pillar">
            <text>日</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.today && todayAdvice.bazi.today.day || '--'}}</text>
          </view>
          <view class="pillar">
            <text>时</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.today && todayAdvice.bazi.today.hour || '--'}}</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="advice-container" v-if="userInfo.birthday">
      <view class="card luck-card">
        <text class="card-title">今日心情</text>
        <text class="luck-text">{{todayAdvice.luck || '加载中...'}}</text>
      </view>
      
      <view class="hourly-fortune" v-if="todayAdvice.hourlyFortune">
        <text class="section-title">心情曲线</text>
        <scroll-view class="fortune-chart" scroll-x="true">
          <view class="chart-container">
            <view class="fortune-bar" v-for="(item, index) in todayAdvice.hourlyFortune" :key="index">
              <view class="bar-wrapper">
                <view class="bar" :class="[
                  item.score >= 90 ? 'mood-excellent' : 
                  item.score >= 80 ? 'mood-good' : 
                  item.score >= 70 ? 'mood-normal' : 
                  'mood-quiet'
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
        <view class="card advice-card">
          <text class="card-title">穿搭色彩</text>
          <text class="advice-text">{{todayAdvice.color || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">工作建议</text>
          <text class="advice-text">{{todayAdvice.career || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">社交建议</text>
          <text class="advice-text">{{todayAdvice.love || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">健康提醒</text>
          <text class="advice-text">{{todayAdvice.health || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">理财提示</text>
          <text class="advice-text">{{todayAdvice.investment || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">饮食建议</text>
          <text class="advice-text">{{todayAdvice.food || '加载中...'}}</text>
        </view>
      </view>
    </view>
    
    <view class="disclaimer">
      <text>温馨提示：本应用提供的建议仅供参考，不作为决策依据。请根据实际情况合理安排。</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      todayAdvice: {},
      todayDate: new Date().toLocaleDateString()
    }
  },
  async onLoad() {
    try {
      await this.getUserInfo();
      if (this.userInfo.birthday) {
        await this.getTodayAdvice();
      }
    } catch (error) {
      console.error('页面加载失败:', error);
    }
  },
  methods: {
    async getUserInfo() {
      try {
        const db = uniCloud.database();
        const res = await db.collection('user_birthdays')
          .orderBy('create_time', 'desc')
          .limit(1)
          .get();
        
        console.log('数据库查询结果:', res);
        
        if (res && res.result && res.result.data && res.result.data.length > 0) {
          this.userInfo = res.result.data[0];
          console.log('获取到用户信息:', this.userInfo);
        } else {
          console.log('未找到生日数据，跳转到生日页面');
          uni.redirectTo({ 
            url: '/pages/birthday/birthday'
          });
        }
      } catch (error) {
        console.error('获取用户信息失败:', error);
        uni.showToast({
          title: '获取用户信息失败',
          icon: 'none'
        });
        setTimeout(() => {
          uni.redirectTo({ 
            url: '/pages/birthday/birthday'
          });
        }, 1500);
      }
    },
    async getTodayAdvice() {
      if (!this.userInfo.birthday || !this.userInfo.birthTime) {
        console.log('没有生日信息，无法获取建议');
        return;
      }

      try {
        console.log('开始获取今日建议，参数:', {
          birthday: this.userInfo.birthday,
          birthTime: this.userInfo.birthTime
        });

        const res = await uniCloud.callFunction({
          name: 'getTodayAdvice',
          data: { 
            birthday: this.userInfo.birthday,
            birthTime: this.userInfo.birthTime
          }
        });
        
        if (res && res.result) {
          console.log('获取到今日建议:', res.result);
          this.todayAdvice = res.result;
        }
      } catch (error) {
        console.error('获取今日建议失败:', error);
        uni.showToast({
          title: '获取建议失败，请重试',
          icon: 'none'
        });
      }
    }
  }
}
</script>

<style lang="scss">
.page-container {
  padding: 30rpx;
  min-height: 100vh;
  background: #f8f9fa;
}

.welcome-header {
  margin-bottom: 30rpx;
  padding: 20rpx;
  background: #fff;
  border-radius: 12rpx;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
  
  .title {
    font-size: 36rpx;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 20rpx;
  }
  
  .user-info {
    .subtitle, .date {
      display: block;
      font-size: 28rpx;
      color: #666;
      margin-top: 10rpx;
    }
  }
}

.bazi-info {
  margin-bottom: 30rpx;
  
  .section {
    background: #fff;
    border-radius: 12rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
    
    .title {
      font-size: 32rpx;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 20rpx;
    }
    
    .pillars {
      display: flex;
      justify-content: space-around;
      
      .pillar {
        text-align: center;
        
        text {
          display: block;
          &:first-child {
            font-size: 24rpx;
            color: #666;
            margin-bottom: 10rpx;
          }
          &:last-child {
            font-size: 32rpx;
            color: #2c3e50;
            font-weight: 500;
          }
        }
      }
    }
  }
}

.advice-container {
  .card {
    background: #fff;
    border-radius: 12rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
    
    .card-title {
      font-size: 28rpx;
      color: #666;
      margin-bottom: 10rpx;
      display: block;
    }
  }
  
  .luck-card {
    text-align: center;
    margin-bottom: 30rpx;
    
    .luck-text {
      font-size: 40rpx;
      font-weight: bold;
      color: #2c3e50;
    }
  }
  
  .hourly-fortune {
    background: #fff;
    border-radius: 12rpx;
    padding: 20rpx;
    margin-bottom: 30rpx;
    box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
    
    .section-title {
      font-size: 28rpx;
      color: #666;
      margin-bottom: 20rpx;
      display: block;
    }
    
    .fortune-chart {
      width: 100%;
      height: 400rpx;
      white-space: nowrap;
      
      .chart-container {
        display: inline-flex;
        padding: 20rpx 0;
        min-width: 100%;
        height: 360rpx;
        
        .fortune-bar {
          flex: 0 0 120rpx;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 10rpx;
          
          .bar-wrapper {
            width: 40rpx;
            height: 200rpx;
            margin-bottom: 10rpx;
            position: relative;
            
            .bar {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              border-radius: 20rpx;
              transition: all 0.3s ease;
              min-height: 20rpx;
              
              &.mood-excellent {
                background: linear-gradient(to top, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
              }
              &.mood-good {
                background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
              }
              &.mood-normal {
                background: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
              }
              &.mood-quiet {
                background: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
              }
            }
          }
          
          .time-label {
            font-size: 24rpx;
            color: #666;
            margin-top: 8rpx;
          }
          
          .score-label {
            font-size: 24rpx;
            color: #999;
            margin-top: 4rpx;
          }
          
          .advice-label {
            font-size: 24rpx;
            color: #666;
            margin-top: 4rpx;
          }
        }
      }
    }
  }
  
  .advice-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20rpx;
    
    .advice-card {
      .advice-text {
        font-size: 28rpx;
        color: #2c3e50;
        line-height: 1.5;
      }
    }
  }
}

.disclaimer {
  margin: 40rpx 0;
  padding: 20rpx;
  text-align: center;
  font-size: 24rpx;
  color: #666;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8rpx;
}
</style>