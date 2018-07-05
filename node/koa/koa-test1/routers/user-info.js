const router = require('koa-router')()

const userInfoController = require('../controllers/user-info')

router.post('/signup', async (ctx, next) => {
  const result = await userInfoController.signup(ctx)
  ctx.body = result
})

router.post('/signin', async (ctx, next) => {
  const result = await userInfoController.signin(ctx)
  ctx.body = result
})

module.exports = router