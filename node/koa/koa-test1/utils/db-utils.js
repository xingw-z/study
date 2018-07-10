const mysql = require("mysql")

const pool = mysql.createPool({
  host     :  'localhost',
  user     : 'root',
  password : '123456',
  database : 'koa_demo'
})

let query = function( sql, values ) {

  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        resolve( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            if (err.code === 'ER_DUP_ENTRY') {
              resolve( {
                code: err.errno,
                msg: '重复的用户名',
                errCode: err.code
              } )
            } else {
              resolve( err )
            }
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}

let insertData = async ( table, values ) => {
  let _sql = "INSERT INTO ?? SET ?"
  return await query( _sql, [ table, values ] )
}

module.exports = {
  query,
  insertData
}