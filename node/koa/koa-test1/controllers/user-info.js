const userInfoService = require('../services/user-info')

module.exports = {
  async signup ( ctx ) {
    const result = await userInfoService.create(ctx.request.body)
    return result
  },
  async signin ( ctx ) {
    const _client = ctx.request.body
    const _database = await userInfoService.signin(ctx.request.body)
    let _body = {}
    if (_client.username === _database.username && _client.password === _database.password) {
      _body.code = '00'
      _body.msg = '成功'
    } else if (_client.username === _database.username) {
      _body.code = '11'
      _body.msg = '密码错误'
    } else if (_client.password === _database.password) {
      _body.code = '12'
      _body.msg = '账号错误'
    } else {
      _body.code = '22'
      _body.msg = '全错'
    }
    return _body
  }
}