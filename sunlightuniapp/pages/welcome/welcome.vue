<template>
  <view class="page-container">
    <view class="welcome-header">
      <text class="title">今日运势</text>
      <view class="user-info" v-if="userInfo.birthday">
        <text class="subtitle">您的生日：{{userInfo.birthday}} {{userInfo.birthTime}}</text>
        <text class="date">今日日期：{{todayDate}}</text>
      </view>
    </view>
    
    <view class="bazi-info" v-if="todayAdvice.bazi">
      <view class="section">
        <view class="title">您的八字</view>
        <view class="pillars">
          <view class="pillar">
            <text>年柱</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.birth && todayAdvice.bazi.birth.year || '--'}}</text>
          </view>
          <view class="pillar">
            <text>月柱</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.birth && todayAdvice.bazi.birth.month || '--'}}</text>
          </view>
          <view class="pillar">
            <text>日柱</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.birth && todayAdvice.bazi.birth.day || '--'}}</text>
          </view>
          <view class="pillar">
            <text>时柱</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.birth && todayAdvice.bazi.birth.hour || '--'}}</text>
          </view>
        </view>
      </view>
      
      <view class="section">
        <view class="title">今日天干地支</view>
        <view class="pillars">
          <view class="pillar">
            <text>年柱</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.today && todayAdvice.bazi.today.year || '--'}}</text>
          </view>
          <view class="pillar">
            <text>月柱</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.today && todayAdvice.bazi.today.month || '--'}}</text>
          </view>
          <view class="pillar">
            <text>日柱</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.today && todayAdvice.bazi.today.day || '--'}}</text>
          </view>
          <view class="pillar">
            <text>时柱</text>
            <text>{{todayAdvice.bazi && todayAdvice.bazi.today && todayAdvice.bazi.today.hour || '--'}}</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="advice-container" v-if="userInfo.birthday">
      <view class="card luck-card">
        <text class="card-title">今日吉凶</text>
        <text class="luck-text">{{todayAdvice.luck || '加载中...'}}</text>
      </view>
      
      <view class="hourly-fortune" v-if="todayAdvice.hourlyFortune">
        <text class="section-title">十二时辰运势</text>
        <scroll-view class="fortune-chart" scroll-x="true">
          <view class="chart-container">
            <view 
              v-for="(item, index) in todayAdvice.hourlyFortune" 
              :key="index"
              class="fortune-bar"
            >
              <view 
                class="bar" 
                :style="{ height: item.score + '%' }"
                :class="[
                  item.score >= 80 ? 'score-high' : 
                  item.score >= 60 ? 'score-medium' : 
                  'score-low'
                ]"
              ></view>
              <text class="time-label">{{item.time}}时</text>
              <text class="score-label">{{item.score}}</text>
              <text class="advice-label">{{item.advice}}</text>
            </view>
          </view>
        </scroll-view>
      </view>
      
      <view class="advice-grid">
        <view class="card advice-card">
          <text class="card-title">穿着建议</text>
          <text class="advice-text">{{todayAdvice.color || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">事业建议</text>
          <text class="advice-text">{{todayAdvice.career || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">感情建议</text>
          <text class="advice-text">{{todayAdvice.love || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">健康建议</text>
          <text class="advice-text">{{todayAdvice.health || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">投资建议</text>
          <text class="advice-text">{{todayAdvice.investment || '加载中...'}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">食物建议</text>
          <text class="advice-text">{{todayAdvice.food || '加载中...'}}</text>
        </view>
      </view>
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
  padding: 20rpx;
  background-color: #f8f8f8;
  min-height: 100vh;
}

.welcome-header {
  margin-bottom: 30rpx;
  
  .title {
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
  }
  
  .user-info {
    margin-top: 20rpx;
    
    .subtitle, .date {
      font-size: 28rpx;
      color: #666;
      display: block;
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
    
    .title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
      margin-bottom: 20rpx;
    }
    
    .pillars {
      display: flex;
      justify-content: space-around;
      
      .pillar {
        text-align: center;
        
        text {
          font-size: 24rpx;
          color: #666;
          margin-bottom: 10rpx;
          display: block;
        }
      }
    }
  }
}

.hourly-fortune {
  background: #fff;
  border-radius: 12rpx;
  padding: 20rpx;
  margin-bottom: 30rpx;
  
  .section-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 20rpx;
    display: block;
  }
  
  .fortune-chart {
    width: 100%;
    height: 400rpx;
    
    .chart-container {
      display: flex;
      padding: 20rpx 0;
      min-width: 1200rpx;
    }
    
    .fortune-bar {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 300rpx;
      padding: 0 10rpx;
      
      .bar {
        width: 40rpx;
        background: #e0e0e0;
        margin-bottom: 10rpx;
        border-radius: 20rpx;
        transition: all 0.3s;
        
        &.score-high {
          background: #ff4d4f;
        }
        
        &.score-medium {
          background: #ffa940;
        }
        
        &.score-low {
          background: #bae637;
        }
      }
      
      .time-label {
        font-size: 24rpx;
        color: #666;
      }
      
      .score-label {
        font-size: 24rpx;
        color: #999;
      }
      
      .advice-label {
        font-size: 24rpx;
        color: #666;
        margin-top: 4rpx;
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
    
    .card-title {
      font-size: 28rpx;
      color: #666;
      margin-bottom: 10rpx;
      display: block;
    }
  }
  
  .luck-card {
    .luck-text {
      font-size: 36rpx;
      color: #333;
      font-weight: bold;
    }
  }
  
  .advice-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20rpx;
    
    .advice-card {
      .advice-text {
        font-size: 28rpx;
        color: #333;
        line-height: 1.5;
      }
    }
  }
}
</style>