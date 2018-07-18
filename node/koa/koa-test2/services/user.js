const modelsUser = require('../models/user.js')

module.exports = {
  async create ( user ) {
    const result = await modelsUser.create(user)
    return result
  },
  async query ( user ) {
    const result = await modelsUser.query(user)
    return result
  }
}