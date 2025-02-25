<template>
  <view class="my-container">
    <view class="user-info">
      <view class="user-circle">
        <text class="initial">生</text>
      </view>
      <view class="info">
        <text class="nickname">生活助手</text>
        <text class="desc">让生活更有规律</text>
      </view>
    </view>

    <view class="menu-list">
      <view class="menu-item" @tap="editBirthday">
        <text class="item-text">修改个人信息</text>
        <text class="arrow">></text>
      </view>
      <view class="menu-item">
        <text class="item-text">关于我们</text>
        <text class="arrow">></text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    editBirthday() {
      uni.navigateTo({
        url: '/pages/birthday/birthday'
      })
    }
  }
}
</script>

<style lang="scss">
.my-container {
  min-height: 100vh;
  background-color: #f8f9fa;
  
  .user-info {
    background: #fff;
    padding: 40rpx;
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    
    .user-circle {
      width: 120rpx;
      height: 120rpx;
      border-radius: 60rpx;
      background: linear-gradient(45deg, #007AFF, #5856D6);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 30rpx;
      
      .initial {
        color: #fff;
        font-size: 48rpx;
        font-weight: 500;
      }
    }
    
    .info {
      flex: 1;
      
      .nickname {
        font-size: 32rpx;
        color: #333;
        font-weight: 500;
        margin-bottom: 10rpx;
        display: block;
      }
      
      .desc {
        font-size: 28rpx;
        color: #666;
      }
    }
  }
  
  .menu-list {
    background: #fff;
    margin-top: 20rpx;
    
    .menu-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30rpx 40rpx;
      border-bottom: 1rpx solid #f5f5f5;
      
      .item-text {
        font-size: 28rpx;
        color: #333;
      }
      
      .arrow {
        font-size: 28rpx;
        color: #999;
      }
      
      &:active {
        background-color: #f8f9fa;
      }
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
