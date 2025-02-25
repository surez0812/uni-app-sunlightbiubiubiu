<template>
  <view class="birthday-container">
    <view class="header">
      <image class="logo" src="/static/logo.png" mode="aspectFit"></image>
      <text class="title">欢迎使用每日生活助手</text>
      <text class="subtitle">请输入您的生日信息，我们将为您提供个性化的生活建议</text>
    </view>

    <view class="form-container">
      <view class="form-group">
        <text class="label">出生日期</text>
        <picker mode="date" :value="birthday" @change="onBirthdayChange" class="picker">
          <view class="picker-value">{{ birthday || '请选择日期' }}</view>
        </picker>
      </view>

      <view class="form-group">
        <text class="label">出生时间</text>
        <picker mode="time" :value="birthTime" @change="onBirthTimeChange" class="picker">
          <view class="picker-value">{{ birthTime || '请选择时间' }}</view>
        </picker>
      </view>

      <button class="submit-btn" @tap="saveBirthday" :disabled="!birthday || !birthTime">
        开始使用
      </button>

      <text class="tips">* 您的信息仅用于提供个性化的生活建议</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      birthday: '',
      birthTime: ''
    }
  },
  methods: {
    onBirthdayChange(e) {
      this.birthday = e.detail.value
    },
    onBirthTimeChange(e) {
      this.birthTime = e.detail.value
    },
    async saveBirthday() {
      if (!this.birthday || !this.birthTime) {
        uni.showToast({
          title: '请填写完整信息',
          icon: 'none'
        })
        return
      }

      try {
        const db = uniCloud.database()
        await db.collection('user_info').add({
          birthday: this.birthday,
          birthTime: this.birthTime,
          create_date: Date.now()
        })

        uni.showToast({
          title: '信息已保存',
          icon: 'success',
          duration: 1500
        })

        setTimeout(() => {
          const pages = getCurrentPages()
          if (pages.length > 1) {
            uni.navigateBack({
              delta: 1
            })
          } else {
            uni.navigateTo({
              url: '/pages/welcome/welcome',
              fail: (err) => {
                console.error('页面跳转失败:', err)
                uni.switchTab({
                  url: '/pages/welcome/welcome'
                })
              }
            })
          }
        }, 1500)
      } catch (error) {
        console.error('保存失败:', error)
        uni.showToast({
          title: '保存失败，请重试',
          icon: 'none'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.birthday-container {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 40rpx;
  
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60rpx;
    
    .logo {
      width: 160rpx;
      height: 160rpx;
      margin-bottom: 30rpx;
    }
    
    .title {
      font-size: 36rpx;
      color: #333;
      margin-bottom: 20rpx;
      font-weight: 500;
    }
    
    .subtitle {
      font-size: 28rpx;
      color: #666;
      text-align: center;
      line-height: 1.5;
    }
  }
  
  .form-container {
    background: #fff;
    border-radius: 16rpx;
    padding: 40rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
    
    .form-group {
      margin-bottom: 40rpx;
      
      .label {
        font-size: 28rpx;
        color: #333;
        margin-bottom: 20rpx;
        display: block;
      }
      
      .picker {
        background: #f8f9fa;
        height: 88rpx;
        border-radius: 8rpx;
        display: flex;
        align-items: center;
        padding: 0 20rpx;
        
        .picker-value {
          font-size: 28rpx;
          color: #333;
        }
      }
    }
    
    .submit-btn {
      width: 100%;
      height: 88rpx;
      background: #007AFF;
      color: #fff;
      border-radius: 44rpx;
      font-size: 32rpx;
      margin-top: 60rpx;
      margin-bottom: 30rpx;
      
      &:active {
        opacity: 0.9;
      }
      
      &[disabled] {
        background: #ccc;
        opacity: 0.6;
      }
    }
    
    .tips {
      font-size: 24rpx;
      color: #999;
      text-align: center;
      display: block;
    }
  }
}
</style>