const dbUtils = require('../utils/db-utils.js')

module.exports = {
  async create ( user ) {
    const queryUsernameResult = dbUtils.queryUsername(user)
    if (queryUsernameResult.err) {
      return { ...queryUsernameResult, msg: '查询错误', code: '4000' }
    } else {
      if (queryUsernameResult.length > 0) {
        return { msg: '用户已经注册', code: '0001' }
      }
    }
    const result = await dbUtils.createUser(user)
    if (result.err) {
      return { msg: '注册错误', code: '4001' }
    } else {
      return { msg: '注册成功', code: '0000' }
    }
  },
  async query ( user ) {
    const result = await dbUtils.queryUsernameAndPassword(user)
    if (result.err) {
      return { msg: '登录错误', code: '4002' }
    } else {
      // session
      let session = ctx.session
      session.isLogin = true
      session.userName = result.username
      session.userId = result.id

      return { msg: '登录成功', code: '0000' }
    }
  }
}