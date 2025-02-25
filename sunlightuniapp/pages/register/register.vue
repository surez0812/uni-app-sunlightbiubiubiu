<template>
  <view>
    <button @click="getPhoneNumber">微信授权注册</button>
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