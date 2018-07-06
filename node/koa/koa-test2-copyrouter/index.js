const Koa = require('koa')
const Router = require('./router')
const app = new Koa()
const router = new Router()

router.get(/^\/$/, ctx => {
  ctx.body = 'home'
})

router.post(/^\/$/, ctx => {
  ctx.body = 'posted'
})

app.use(router.middleware())
app.listen(3000)