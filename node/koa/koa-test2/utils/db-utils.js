const Sequelize = require('sequelize')
const config = require('../config')

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

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false
});

let create = ( user ) => {
  return new Promise((resolve, reject) => {
    User.create(user).then(res => {
      resolve(res)
    }).catch(err => {
      resolve(err)
    })
  })
}

// let create = async ( user ) => {
//   let result = await User.create(user)
//   console.log(result)
//   return result
// }

let queryUsername = ( user ) => {
  return new Promise((resolve, reject) => {
    User.findAll({
      where:{
        username: user.username
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      resolve(err)
    })
  })
}

let queryUsernameAndPassword = ( user ) => {
  return new Promise((resolve, reject) => {
    User.findAll({
      where:{
        username: user.username,
        password: user.password
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      resolve(err)
    })
  })
}

module.exports = {
  create,
  queryUsername,
  queryUsernameAndPassword
}