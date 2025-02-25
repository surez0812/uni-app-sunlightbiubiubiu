async function initWeixin() {
  const { PLATFORM } = this.getClientInfo()
  this.context.PLATFORM = PLATFORM
}

module.exports = {
  initWeixin
} 