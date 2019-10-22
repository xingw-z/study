const router = require('koa-router')()
const loginModels = require('../models/login')
const articleModels = require('../models/article')

router.post('/signup', async (ctx, next) => {
  const result = await loginModels.create(ctx.request.body)
  ctx.body = result
})

router.post('/signin', async (ctx, next) => {
  const result = await loginModels.query(ctx.request.body)
  ctx.body = result
})

router.post('/addArticle', async (ctx, next) => {  
  const result = await articleModels.addArticle(ctx.request.body)
  ctx.body = result
})

router.get('/articleList', async (ctx, next) => {
  const result = await articleModels.queryArticleList(ctx)
  ctx.body = result
})

router.post('/queryArticle', async (ctx, next) => {
  const result = await articleModels.queryArticle(ctx.request.body)
  ctx.body = result
})


module.exports = router