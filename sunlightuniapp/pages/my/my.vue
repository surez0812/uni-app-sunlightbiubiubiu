<template>
  <view class="my-container">
    <view class="user-info">
      <view class="avatar-container">
        <image class="avatar" src="/static/images/avatar.svg" mode="aspectFill"></image>
      </view>
      <view class="info">
        <text class="nickname">熹色</text>
        <text class="desc">「熹色」是一款专注生活美学的个性化工具。根据天气、场合与心情，为你生成每日穿搭色卡与生活灵感：通勤日的干练配色，约会夜的温柔搭配，休闲时光的活力碰撞……熹色用色彩点亮生活仪式感，助你发现日常中的小确幸。</text>
      </view>
    </view>

    <view class="menu-list">
      <view class="menu-item" @tap="editBirthday">
        <view class="item-left">
          <view class="icon-wrapper">
            <text class="iconfont">🎂</text>
          </view>
          <text class="item-text">修改个人信息</text>
        </view>
        <text class="arrow">›</text>
      </view>
      <view class="menu-item">
        <view class="item-left">
          <view class="icon-wrapper">
            <text class="iconfont">ℹ️</text>
          </view>
          <text class="item-text">关于我们</text>
        </view>
        <text class="arrow">›</text>
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
@import '@/styles/theme.scss';

.my-container {
  min-height: 100vh;
  background-color: $color-bg-primary;
  
  .user-info {
    background: $color-primary-gradient;
    padding: $spacing-2xl $spacing-xl;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.05));
    }
    
    .avatar-container {
      position: relative;
      z-index: 1;
      margin-bottom: $spacing-lg;
      
      .avatar {
        width: 160rpx;
        height: 160rpx;
        border-radius: 50%;
        border: 4rpx solid #fff;
        box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
      }
    }
    
    .info {
      position: relative;
      z-index: 1;
      text-align: center;
      
      .nickname {
        font-size: $font-2xl;
        color: #fff;
        font-weight: $weight-semibold;
        margin-bottom: $spacing-sm;
        display: block;
        text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
      }
      
      .desc {
        font-size: $font-sm;
        color: rgba(255, 255, 255, 0.9);
        text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
        line-height: 1.6;
      }
    }
  }
  
  .menu-list {
    margin: $spacing-xl;
    background: $color-bg-card;
    border-radius: $radius-lg;
    box-shadow: $shadow-md;
    overflow: hidden;
    
    .menu-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $spacing-lg $spacing-xl;
      border-bottom: 1rpx solid $color-border;
      
      .item-left {
        display: flex;
        align-items: center;
        
        .icon-wrapper {
          width: 72rpx;
          height: 72rpx;
          border-radius: $radius-lg;
          background: rgba($color-system-blue, 0.1);
          @include flex-center;
          margin-right: $spacing-lg;
          
          .iconfont {
            font-size: $font-xl;
          }
          
          &:nth-child(2) {
            background: rgba($color-system-purple, 0.1);
          }
        }
        
        .item-text {
          font-size: $font-md;
          color: $color-text-primary;
          font-weight: $weight-medium;
        }
      }
      
      .arrow {
        font-size: $font-xl;
        color: $color-text-quaternary;
        line-height: 1;
      }
      
      &:active {
        background-color: $color-bg-tertiary;
      }
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
