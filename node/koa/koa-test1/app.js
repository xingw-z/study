const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')

const router = require('./routers/user-info')

const app = new Koa()

app.use(cors())
app.use(bodyParser())





app.use(router.routes())


app.listen(3000, () => {
  console.log('[demo] request get is starting at port 3000')
})