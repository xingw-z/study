const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
var cors = require('koa2-cors');

app.use(cors());
// 使用ctx.body解析中间件
app.use(bodyParser())

const _router = router.post('/', async ( ctx )=>{
    console.log(ctx, '???')
})

_router2 = router.use('/login', _router.routes(), _router.allowedMethods())


app.use(_router2.routes()).use(_router2.allowedMethods())


app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000')
})