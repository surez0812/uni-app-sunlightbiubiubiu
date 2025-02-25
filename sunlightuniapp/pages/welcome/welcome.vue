<template>
  <view class="page-container">
    <view class="welcome-header">
      <text class="title">欢迎回来！</text>
      <view class="user-info">
        <text class="subtitle">您的生日：{{userInfo.birthday}} {{userInfo.birthTime}}</text>
        <text class="date">今日日期：{{todayAdvice.date}}</text>
      </view>
    </view>
    
    <view class="advice-container">
      <view class="card luck-card">
        <text class="card-title">今日吉凶</text>
        <text class="luck-text">{{todayAdvice.luck}}</text>
      </view>
      
      <view class="advice-grid">
        <view class="card advice-card">
          <text class="card-title">穿着建议</text>
          <text class="advice-text">{{todayAdvice.color}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">事业建议</text>
          <text class="advice-text">{{todayAdvice.career}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">感情建议</text>
          <text class="advice-text">{{todayAdvice.love}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">健康建议</text>
          <text class="advice-text">{{todayAdvice.health}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">投资建议</text>
          <text class="advice-text">{{todayAdvice.investment}}</text>
        </view>
        
        <view class="card advice-card">
          <text class="card-title">食物建议</text>
          <text class="advice-text">{{todayAdvice.food}}</text>
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
      todayAdvice: {}
    }
  },
  async mounted() {
    const userId = uni.getStorageSync('userId');
    await this.getUserInfo(userId);
    await this.getTodayAdvice(userId);
  },
  methods: {
    async getUserInfo(userId) {
      const db = uniCloud.database();
      const res = await db.collection('user_birthdays')
        .where({ user_id: userId })
        .get();
      
      if (res.data.length > 0) {
        this.userInfo = res.data[0];
      }
    },
    
    async getTodayAdvice(userId) {
      const res = await uniCloud.callFunction({
        name: 'getTodayAdvice',
        data: { userId }
      });
      
      if (res.result) {
        this.todayAdvice = res.result;
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/theme.scss';

.welcome-header {
  margin-bottom: $spacing-xl;
  
  .title {
    font-size: $font-2xl;
    margin-bottom: $spacing-md;
  }
  
  .user-info {
    @include card;
    
    .subtitle {
      display: block;
      margin-bottom: $spacing-sm;
    }
    
    .date {
      color: $text-secondary;
    }
  }
}

.advice-container {
  .luck-card {
    margin-bottom: $spacing-lg;
    background-color: $theme-primary;
    
    .card-title {
      color: $text-light;
      font-size: $font-lg;
      margin-bottom: $spacing-sm;
    }
    
    .luck-text {
      color: $text-light;
      font-size: $font-xl;
      font-weight: $weight-bold;
    }
  }
  
  .advice-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-md;
    
    .advice-card {
      .card-title {
        color: $text-secondary;
        font-size: $font-sm;
        margin-bottom: $spacing-xs;
      }
      
      .advice-text {
        color: $text-primary;
        font-size: $font-md;
      }
    }
  }
}
</style>