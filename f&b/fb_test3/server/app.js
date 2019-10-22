const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const router = require('./router/index.js')

const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')

const config = require('./config')

const port = 3333;


app.use(cors());
app.use(bodyParser());


// session存储配置
const sessionMysqlConfig= {
  user: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))




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



app.use(router.routes());


app.listen(port, () => {
    console.log(`port is ${port}`)
})
