const Sequelize = require('sequelize')
const config = require('../config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,

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

const Article = sequelize.define('articles', {
  articleTitle: {
    type: Sequelize.STRING
  },
  createTime: {
    type: Sequelize.STRING
  },
  articleContent: {
    type: Sequelize.TEXT
  }
}, {
  freezeTableName: true,
  timestamps: false
});

sequelize
  .sync()
  .then(() => {
    console.log('init db ok')
})
  .catch(err => {
    console.log('init db error', err)
})


let createUser = ( user ) => {
  return new Promise((resolve, reject) => {
    User.create(user).then(res => {
      resolve(res)
    }).catch(err => {
      reject({...err, err: true})
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
      reject({...err, err: true})
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
      reject({...err, err: true})
    })
  })
};


let addArticle = ( artile ) => {
  return new Promise((resolve, reject) => {
    Article.create(artile).then(res => {
      resolve(res)
    }).catch(err => {
      reject({...err, err: true})
    })
  })
}

let queryArticleList = () => {
  return new Promise((resolve, reject) => {
    Article.findAll().then(res => {
      resolve(res)
    }).catch(err => {
      reject({...err, err: true})
    })
  })
};

let queryArticle = ( article ) => {
  return new Promise((resolve, reject) => {
    Article.findOne({
      where:{
        id: article.id
      }
    }).then(res => {
      // resolve(res.dataValues)
      resolve(res)
    }).catch(err => {
      reject({...err, err: true})
    })
  })
};


module.exports = {
  createUser,
  queryUsername,
  queryUsernameAndPassword,
  addArticle,
  queryArticleList,
  queryArticle
}
