const Koa = require('koa')
const cors = require('koa2-cors')
const app = new Koa()
const router = require('./router/index.js')
const bodyParser = require('koa-bodyparser')




app.use(cors())
app.use(bodyParser())
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.app.emit('error', err, ctx);
  }
});

app.on('error', (err, ctx) => {
  ctx.status = 200;
  ctx.body = err;
});


app.use(router.routes())

const port = 5656

app.listen(port, () => {
  console.log(`启动 浏览器打开http://localhost:${port}/`)
})