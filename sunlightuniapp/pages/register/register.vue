<template>
  <view class="page-container register-page">
    <view class="register-content">
      <image class="logo" src="/static/logo.png" mode="aspectFit"></image>
      <text class="title">欢迎使用八字分析</text>
      <text class="subtitle">使用微信账号快速注册</text>
      
      <view class="auth-section">
        <button class="button-primary auth-button" @click="getPhoneNumber">
          <text class="wechat-icon">微信</text>
          <text>授权注册</text>
        </button>
        <text class="privacy-tip">注册即代表同意《用户协议》和《隐私政策》</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    async getPhoneNumber() {
      try {
        // 获取微信手机号
        const { code } = await uni.login({ provider: 'weixin' });
        const { encryptedData, iv } = await uni.getPhoneNumber({ provider: 'weixin' });

        // 调用云函数注册用户
        const res = await uniCloud.callFunction({
          name: 'registerUser',
          data: { code, encryptedData, iv }
        });

        if (res.result.success) {
          uni.setStorageSync('userId', res.result.userId);
          this.checkBirthday(res.result.userId);
        }
      } catch (error) {
        console.error('注册失败:', error);
      }
    },

    async checkBirthday(userId) {
      const db = uniCloud.database();
      const res = await db.collection('user_birthdays')
        .where({ user_id: userId })
        .get();

      if (res.data.length > 0) {
        uni.navigateTo({ url: '/pages/welcome/welcome' });
      } else {
        uni.navigateTo({ url: '/pages/birthday/birthday' });
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/theme.scss';

.register-page {
  @include flex-center;
  background-color: $bg-primary;
  min-height: 100vh;
}

.register-content {
  width: 80%;
  max-width: 300px;
  @include flex-center;
  flex-direction: column;
  
  .logo {
    width: 120px;
    height: 120px;
    margin-bottom: $spacing-xl;
  }
  
  .title {
    font-size: $font-2xl;
    font-weight: $weight-bold;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }
  
  .subtitle {
    font-size: $font-md;
    color: $text-secondary;
    margin-bottom: $spacing-xl * 2;
  }
}

.auth-section {
  width: 100%;
  
  .auth-button {
    @include flex-center;
    width: 100%;
    height: 48px;
    margin-bottom: $spacing-md;
    
    .wechat-icon {
      margin-right: $spacing-sm;
    }
  }
  
  .privacy-tip {
    display: block;
    text-align: center;
    font-size: $font-xs;
    color: $text-muted;
  }
}
</style>