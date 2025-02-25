<template>
  <view>
    <view>欢迎回来！</view>
    <view>您的生日：{{userInfo.birthday}} {{userInfo.birthTime}}</view>
    <view>今日日期：{{todayAdvice.date}}</view>
    <view>今日吉凶：{{todayAdvice.luck}}</view>
    <view>穿着建议：{{todayAdvice.color}}</view>
    <view>事业建议：{{todayAdvice.career}}</view>
    <view>感情建议：{{todayAdvice.love}}</view>
    <view>健康建议：{{todayAdvice.health}}</view>
    <view>投资建议：{{todayAdvice.investment}}</view>
    <view>食物建议：{{todayAdvice.food}}</view>
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