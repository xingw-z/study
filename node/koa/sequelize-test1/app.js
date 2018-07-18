const Sequelize = require('sequelize')
const config = require('./config')

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});


// User.create({
//   id: '1',
//   username: 'asdddd',
//   password: 'asdddd'
// }).then(res => {
//   console.log('success', JSON.stringify(res))
// }).catch(err => {
//   let _err = JSON.stringify(err)
//   console.log('fail', err.name)
//   console.log(err.errors[0].message)
// })

// (async () => {
//   var result = await User.create({
//     id: '1',
//     username: 'dasdsad',
//     password: 'a123123'
//   });
//   console.log('result', JSON.stringify(result))
// })();