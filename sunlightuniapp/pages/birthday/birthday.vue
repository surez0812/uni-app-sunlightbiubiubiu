<template>
  <view class="page-container">
    <view class="birthday-form">
      <text class="title">设置您的生日</text>
      <text class="subtitle">请选择您的出生日期和时间</text>
      
      <view class="form-group">
        <picker mode="date" @change="setBirthday" class="picker">
          <view class="picker-item">
            <text class="label">出生日期</text>
            <view class="input-display">
              <text :class="{'placeholder': !birthday}">{{birthday || '请选择日期'}}</text>
              <text class="icon">▼</text>
            </view>
          </view>
        </picker>
        
        <picker mode="time" @change="setBirthTime" class="picker">
          <view class="picker-item">
            <text class="label">出生时间</text>
            <view class="input-display">
              <text :class="{'placeholder': !birthTime}">{{birthTime || '请选择时间'}}</text>
              <text class="icon">▼</text>
            </view>
          </view>
        </picker>
      </view>
      
      <button class="button-primary save-button" @click="saveBirthday">
        保存信息
      </button>
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
    setBirthday(e) {
      this.birthday = e.detail.value;
    },
    setBirthTime(e) {
      this.birthTime = e.detail.value;
    },
    async saveBirthday() {
      const userId = uni.getStorageSync('userId');
      try {
        const res = await uniCloud.callFunction({
          name: 'saveBirthday',
          data: {
            user_id: userId,
            birthday: this.birthday,
            birthTime: this.birthTime
          }
        });

        if (res.result.success) {
          uni.navigateTo({ url: '/pages/welcome/welcome' });
        }
      } catch (error) {
        console.error('保存失败:', error);
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/theme.scss';

.birthday-form {
  @include card;
  margin: $spacing-xl;
  
  .title {
    font-size: $font-xl;
    font-weight: $weight-bold;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }
  
  .subtitle {
    font-size: $font-md;
    color: $text-secondary;
    margin-bottom: $spacing-xl;
  }
  
  .form-group {
    margin-bottom: $spacing-xl;
  }
  
  .picker {
    margin-bottom: $spacing-lg;
    
    .picker-item {
      .label {
        font-size: $font-sm;
        color: $text-secondary;
        margin-bottom: $spacing-xs;
        display: block;
      }
      
      .input-display {
        @include flex-between;
        padding: $spacing-md;
        background-color: $bg-secondary;
        border-radius: $radius-md;
        border: 1px solid $border-color;
        
        .placeholder {
          color: $text-muted;
        }
        
        .icon {
          font-size: $font-sm;
          color: $text-secondary;
        }
      }
    }
  }
  
  .save-button {
    width: 100%;
    height: 44px;
    font-size: $font-md;
  }
}
</style>