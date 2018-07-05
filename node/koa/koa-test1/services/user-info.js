const userModel = require('../models/user-info')

const user = {
  async create( user ) {
    let result = await userModel.create(user)
    return result
  },
  async signin ( user ) {
    const result = await userModel.getOneByUserNameAndPassword(user)
    return result
  }
}

module.exports = user