<template>
  <view class="pouch-container">
    <view class="header">
      <view class="title-section">
        <text class="title">元气锦囊</text>
        <text class="subtitle">{{formatDate(pouchData.date)}}</text>
      </view>
      <view class="weather-badge">
        <text class="weather-text">{{pouchData.weather || '晴'}}</text>
      </view>
    </view>
    
    <view class="content-container">
      <!-- 每日总结 -->
      <view class="card summary-card">
        <view class="card-title">
          <text class="title-text">今日总结</text>
        </view>
        <text class="card-content">{{pouchData.daily_summary || '加载中...'}}</text>
      </view>
      
      <!-- 八字断言 -->
      <view class="card bazi-card">
        <view class="card-title">
          <text class="title-text">八字断言</text>
        </view>
        <text class="card-content">{{pouchData.bazi_duanyan || '加载中...'}}</text>
      </view>
      
      <!-- 建议卡片网格 -->
      <view class="advice-grid">
        <!-- 穿搭配色建议 -->
        <view class="card">
          <view class="card-title">
            <text class="title-text">穿搭配色</text>
          </view>
          <text class="card-content">{{pouchData.colors_advice || '加载中...'}}</text>
        </view>
        
        <!-- 投资建议 -->
        <view class="card">
          <view class="card-title">
            <text class="title-text">投资建议</text>
          </view>
          <text class="card-content">{{pouchData.touzi_advice || '加载中...'}}</text>
        </view>
        
        <!-- 健康建议 -->
        <view class="card">
          <view class="card-title">
            <text class="title-text">健康建议</text>
          </view>
          <text class="card-content">{{pouchData.health_advice || '加载中...'}}</text>
        </view>
        
        <!-- 工作学习建议 -->
        <view class="card">
          <view class="card-title">
            <text class="title-text">工作学习</text>
          </view>
          <text class="card-content">{{pouchData.work_advice || '加载中...'}}</text>
        </view>
        
        <!-- 感情建议 -->
        <view class="card">
          <view class="card-title">
            <text class="title-text">感情建议</text>
          </view>
          <text class="card-content">{{pouchData.love_advice || '加载中...'}}</text>
        </view>
      </view>
      
      <!-- 时辰吉凶表 -->
      <view class="card shechen-card">
        <view class="card-title">
          <text class="title-text">十二时辰吉凶表</text>
        </view>
        
        <scroll-view class="shechen-scroll" scroll-x="true">
          <view class="shechen-table">
            <view 
              class="shechen-item" 
              v-for="(item, index) in shechenData" 
              :key="index"
              :class="[getLuckyClass(item.score)]"
            >
              <text class="time">{{item.time}}</text>
              <text class="score">{{item.score}}分</text>
              <text class="advice">{{item.advice}}</text>
            </view>
          </view>
        </scroll-view>
      </view>
      
      <view class="disclaimer">
        <text>提示：本分析基于传统八字理论，仅供参考，请理性看待。</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      pouchData: {},
      shechenData: []
    }
  },
  onLoad(options) {
    if (options.id) {
      this.id = options.id
      this.fetchPouchData()
    } else {
      uni.showToast({
        title: '参数错误',
        icon: 'none'
      })
      setTimeout(() => {
        uni.navigateBack()
      }, 1500)
    }
  },
  methods: {
    async fetchPouchData() {
      try {
        uni.showLoading({
          title: '加载中...'
        })
        
        console.log('开始获取元气锦囊数据，ID:', this.id)
        
        const db = uniCloud.database()
        const result = await db.collection('daily_advice')
          .doc(this.id)
          .get()
        
        uni.hideLoading()
        
        console.log('获取元气锦囊数据结果:', JSON.stringify(result))
        
        if (result.data && result.data.length > 0) {
          this.pouchData = result.data[0]
          console.log('获取到元气锦囊数据:', JSON.stringify(this.pouchData))
          
          // 解析时辰数据
          try {
            if (this.pouchData.shechen_advice) {
              console.log('解析时辰数据:', this.pouchData.shechen_advice)
              this.shechenData = JSON.parse(this.pouchData.shechen_advice)
            }
          } catch (e) {
            console.error('解析时辰数据失败:', e)
          }
        } else {
          console.error('未找到元气锦囊数据')
          uni.showToast({
            title: '未找到数据',
            icon: 'none'
          })
          setTimeout(() => {
            uni.navigateBack()
          }, 1500)
        }
      } catch (error) {
        uni.hideLoading()
        console.error('获取元气锦囊数据失败:', error)
        uni.showToast({
          title: '获取数据失败',
          icon: 'none'
        })
      }
    },
    
    formatDate(dateString) {
      if (!dateString) return '今日'
      
      const date = new Date(dateString)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      
      return `${year}年${month}月${day}日`
    },
    
    getLuckyClass(score) {
      if (score >= 90) return 'lucky-excellent'
      if (score >= 80) return 'lucky-good'
      if (score >= 70) return 'lucky-normal'
      if (score >= 60) return 'lucky-fair'
      return 'lucky-poor'
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/theme.scss';

.pouch-container {
  min-height: 100vh;
  background-color: $color-bg-primary;
  
  .header {
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
    padding: $spacing-2xl $spacing-xl $spacing-xl;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    .title-section {
      .title {
        font-size: $font-2xl;
        color: #fff;
        font-weight: $weight-bold;
        text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
        display: block;
      }
      
      .subtitle {
        font-size: $font-md;
        color: rgba(255, 255, 255, 0.9);
        margin-top: $spacing-xs;
        display: block;
      }
    }
    
    .weather-badge {
      background-color: rgba(255, 255, 255, 0.2);
      padding: $spacing-xs $spacing-md;
      border-radius: $radius-full;
      backdrop-filter: blur(5px);
      
      .weather-text {
        color: #fff;
        font-size: $font-sm;
      }
    }
  }
  
  .content-container {
    padding: $spacing-xl;
    margin-top: -$spacing-xl;
    
    .card {
      background-color: $color-bg-card;
      border-radius: $radius-lg;
      padding: $spacing-lg;
      margin-bottom: $spacing-lg;
      box-shadow: $shadow-sm;
      
      .card-title {
        margin-bottom: $spacing-md;
        border-bottom: 1px solid $color-border;
        padding-bottom: $spacing-sm;
        
        .title-text {
          font-size: $font-lg;
          color: $color-text-primary;
          font-weight: $weight-semibold;
        }
      }
      
      .card-content {
        font-size: $font-md;
        color: $color-text-secondary;
        line-height: 1.6;
      }
    }
    
    .summary-card {
      background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
      
      .card-title {
        border-bottom-color: rgba(255, 255, 255, 0.3);
        
        .title-text {
          color: #fff;
        }
      }
      
      .card-content {
        color: rgba(255, 255, 255, 0.9);
      }
    }
    
    .bazi-card {
      background: linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%);
      
      .card-title {
        border-bottom-color: rgba(255, 255, 255, 0.3);
        
        .title-text {
          color: #fff;
        }
      }
      
      .card-content {
        color: rgba(255, 255, 255, 0.9);
      }
    }
    
    .advice-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: $spacing-md;
      margin-bottom: $spacing-lg;
      
      .card {
        margin-bottom: 0;
      }
    }
    
    .shechen-card {
      .shechen-scroll {
        width: 100%;
      }
      
      .shechen-table {
        display: flex;
        padding: $spacing-md 0;
        width: max-content;
        
        .shechen-item {
          width: 160rpx;
          margin-right: $spacing-md;
          padding: $spacing-md;
          border-radius: $radius-md;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          
          &.lucky-excellent {
            background-color: #ff9a9e;
            
            .score, .time {
              color: #fff;
            }
          }
          
          &.lucky-good {
            background-color: #fad0c4;
          }
          
          &.lucky-normal {
            background-color: #a1c4fd;
          }
          
          &.lucky-fair {
            background-color: #c2e9fb;
          }
          
          &.lucky-poor {
            background-color: #d1d1d1;
          }
          
          .time {
            font-size: $font-sm;
            font-weight: $weight-medium;
            margin-bottom: $spacing-xs;
          }
          
          .score {
            font-size: $font-md;
            font-weight: $weight-bold;
            margin-bottom: $spacing-xs;
          }
          
          .advice {
            font-size: $font-xs;
            color: $color-text-secondary;
          }
        }
      }
    }
    
    .disclaimer {
      text-align: center;
      padding: $spacing-md;
      
      text {
        font-size: $font-xs;
        color: $color-text-tertiary;
      }
    }
  }
}
</style>
