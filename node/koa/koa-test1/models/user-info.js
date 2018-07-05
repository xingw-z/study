const dbUtils = require('../utils/db-utils')

const user = {
  async create ( model ) {
    let result = await dbUtils.insertData( 'user_info', model )
    return result
  },
  async getOneByUserNameAndPassword( options ) {
    let _sql = `
    SELECT * from user_info
      where password="${options.password}" and username="${options.username}"`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  }
}

module.exports = user