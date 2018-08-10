const router = require('koa-router')()
const models = require('../models')

router.post('/signup', async (ctx, next) => {
  const result = await models.create(ctx.request.body)
  ctx.body = result
})

router.post('/signin', async (ctx, next) => {
  const result = await models.query(ctx.request.body)
  ctx.body = result
})


module.exports = router