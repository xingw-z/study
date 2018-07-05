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
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}

let insertData = function( table, values ) {
  let _sql = "INSERT INTO ?? SET ?"
  return query( _sql, [ table, values ] )
}

module.exports = {
  query,
  insertData
}