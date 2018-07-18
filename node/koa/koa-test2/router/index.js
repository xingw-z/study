const router = require('koa-router')()
const controllersUser = require('../controllers/user.js')

router.post('/signup', async (ctx, next) => {
  const result = await controllersUser.signup(ctx.request.body)
  ctx.body = result
})

router.post('/signin', async (ctx, next) => {
  const result = await controllersUser.signin(ctx.request.body)
  ctx.body = result
})


module.exports = router