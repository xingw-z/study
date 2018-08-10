const Sequelize = require('sequelize')
const config = {
  dialect: 'mysql',
  database: 'fb_test2',
  username: 'root',
  password: '123456',
  host: 'localhost',
  port: 3306
}

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

let createUser = ( user ) => {
  return new Promise((resolve, reject) => {
    User.create(user).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
};

let queryUsername = ( user ) => {
  return new Promise((resolve, reject) => {
    User.findAll({
      where:{
        username: user.username
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
};

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
      reject(err)
    })
  })
};

module.exports = {
  createUser,
  queryUsername,
  queryUsernameAndPassword
}
