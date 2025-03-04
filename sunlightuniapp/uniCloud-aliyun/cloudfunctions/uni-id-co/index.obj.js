const { userInfo, createApi, useUniIdCommon } = require('uni-id-co')

module.exports = {
  _before: function() {
    // 通过useUniIdCommon获取uni-id实例
    this.uniID = useUniIdCommon.call(this)
  },

  async login() {
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