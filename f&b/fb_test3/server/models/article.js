const dbUtils = require('../utils/db-utils.js')

let sessionJudge = ( ctx, func ) => {
  return new Promise((resolve, reject) => {
    if ( ctx.session && ctx.session.isLogin && ctx.session.userName ) {
      resolve(func())
    } else {
      resolve({ msg: '未登录', code: '5000' })
    }
  })
}

module.exports = {
  async addArticle ( article ) {
    const result = await dbUtils.addArticle(article)
    if (result.err) {
        return { msg: '新增文章失败', code: '4003' }
    } else {
        return { msg: '新增文章成功', code: '0000' }
    }
  },
  async queryArticleList ( ctx ) {
    // 判断是否有session
    // if ( ctx.session && ctx.session.isLogin && ctx.session.userName ) {

    //   const result = await dbUtils.queryArticleList()
    //   if (result.err) {
    //       return { msg: '查询文章列表失败', code: '4004' }
    //   } else {
    //       return { data: { ...result }, msg: '查询文章列表成功', code: '0000' }
    //   }

    // } else {
    //   // 没有登录态则返回未登录
    //   return { msg: '未登录', code: '5000' }
    // }

    const result = await dbUtils.queryArticleList()
    if (result.err) {
        return { msg: '查询文章列表失败', code: '4004' }
    } else {
        return { data: { ...result }, msg: '查询文章列表成功', code: '0000' }
    }
    
  },
  async queryArticle ( article ) {
    const result = await dbUtils.queryArticle(article)
    if (result.err) {
        return { msg: '查询文章失败', code: '4005' }
    } else {
        // console.log(result._modelOptions.sequelize)
        // 这样传递是因为 虽然 sequelize 没有报错 但是 sequelize 返回的一些数据格式 前端并不支持 所以 只选择前端支持的数据格式传过去
        return { data: { ...result.dataValues },  msg: '查询文章成功', code: '0000' }
    }
  }
}


