<template>
  <view>
    <picker mode="date" @change="setBirthday">
      <view>选择生日：{{birthday}}</view>
    </picker>
    <picker mode="time" @change="setBirthTime">
      <view>选择时间：{{birthTime}}</view>
    </picker>
    <button @click="saveBirthday">保存</button>
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