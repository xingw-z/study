const dbUtils = require('../utils/db-utils.js')

module.exports = {
  async create ( user ) {
    const result = await dbUtils.createUser(user)
    return result
  },
  async query ( user ) {
    const result = await dbUtils.queryUsernameAndPassword(user)
    return result
  }
}