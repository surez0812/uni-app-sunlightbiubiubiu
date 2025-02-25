<template>
  <view class="page-container">
    <view class="custom-nav">
      <text class="nav-title">录入生日</text>
    </view>
    
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
        开始分析
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
      if (!this.birthday || !this.birthTime) {
        uni.showToast({
          title: '请选择完整的出生日期和时间',
          icon: 'none'
        });
        return;
      }

      try {
        const db = uniCloud.database();
        await db.collection('user_birthdays').add({
          birthday: this.birthday,
          birthTime: this.birthTime
        });

        uni.redirectTo({ 
          url: '/pages/welcome/welcome'
        });
      } catch (error) {
        console.error('保存失败:', error);
        uni.showToast({
          title: '保存失败，请重试',
          icon: 'none'
        });
      }
    }
  }
}
</script>

<style lang="scss">
.page-container {
  min-height: 100vh;
  background-color: #F8F9FA;
  padding-bottom: 40px;
}

.custom-nav {
  background-color: #F8F8F8;
  padding: 44px 16px 12px;
  
  .nav-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    text-align: center;
    display: block;
  }
}

.birthday-form {
  margin: 20px;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  
  .title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }
  
  .subtitle {
    font-size: 14px;
    color: #666;
    margin-bottom: 32px;
  }
  
  .form-group {
    margin-bottom: 32px;
  }
  
  .picker {
    margin-bottom: 20px;
    
    .picker-item {
      .label {
        font-size: 14px;
        color: #666;
        margin-bottom: 8px;
        display: block;
      }
      
      .input-display {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background-color: #F8F9FA;
        border-radius: 8px;
        border: 1px solid #E9ECEF;
        
        .placeholder {
          color: #ADB5BD;
        }
        
        .icon {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
  
  .save-button {
    width: 100%;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #4A90E2;
    border-radius: 8px;
    border: none;
    
    &:active {
      opacity: 0.9;
    }
  }
}
</style>