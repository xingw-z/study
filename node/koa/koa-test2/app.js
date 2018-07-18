const Koa = require('koa')

const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const router = require('./router/index.js')
const app = new Koa()
app.use(cors())
app.use(bodyParser())
app.use(router.routes())


const port = 5005
app.listen(port, () => {
  console.log('开始了啊', port)
});