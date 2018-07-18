const dbUtils = require('../utils/db-utils.js')

module.exports = {
  async create ( user ) {
    const result = await dbUtils.create(user)
    return result
  },
  async query ( user ) {
    const result = await dbUtils.query(user)
    return result
  }
}