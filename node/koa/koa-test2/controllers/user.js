// const servicesUser = require('../services/user.js')
const dbUtils = require('../utils/db-utils.js')
module.exports = {
  async signup ( data ) {
    // let result1 = await dbUtils.queryUsername(data)
    // let result
    // if (result1 && result1.length > 0) {
    //   result = {
    //     msg: '账号已被注册',
    //     code: '03'
    //   }
    // } else {
    //   result = await dbUtils.create(data)
    //   if (result) {
    //     result = {
    //       msg: '注册成功',
    //       code: '00'
    //     }
    //   } else {
    //     result = {
    //       msg: '注册失败 不知道哪错了 等我看看',
    //       code: '04'
    //     }
    //   }
    // }
    return await dbUtils.create(data)
  },
  async signin ( data ) {
    let result1 = await dbUtils.queryUsername(data)
    let result
    if (result1 && result1.length > 0) {
      let result2 = await dbUtils.queryUsernameAndPassword(data)
      if (result2 && result2.length > 0) {
        result = {
          msg: '成了 完事',
          code: '00',
          data: result2[0]
        }
      } else {
        result = {
          msg: '密码错误',
          code: '02'
        }
      }
    } else {
      result = {
        msg: '没有这个账号',
        code: '01'
      }
    }
    return result
  }
}