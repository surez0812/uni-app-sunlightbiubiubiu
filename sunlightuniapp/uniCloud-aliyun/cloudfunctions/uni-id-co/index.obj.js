const { initWeixin } = require('./lib/utils/weixin')
const { userInfo, createApi, useUniIdCommon } = require('uni-id-common')

module.exports = {
  _before: async function() {
    // 通过useUniIdCommon获取uni-id实例
    this.uniID = useUniIdCommon.call(this)
    // 初始化微信
    await initWeixin.call(this)
  },

  async loginByWeixin() {
    const { code } = this.getParams()
    
    // 获取微信openid
    const { openid } = await this.uniID.code2SessionWeixin({ code })
    if (!openid) {
      return {
        code: 10001,
        message: '获取openid失败'
      }
    }

    // 自动注册并登录
    const result = await this.uniID.loginByWeixin({
      code,
      autoSignUp: true // 如果用户不存在自动注册
    })

    return result
  }
} 