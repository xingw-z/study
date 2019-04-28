const Koa = require('koa')

const app = new Koa()

const axios = require('axios')

axios.get('https://marketingtest.moguyun.com/market-platform/intf/h5/market/queryCompanys').then(res => {
    console.log(res, '???')
}).catch(err => {
    console.log(err, 'err')
})


app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
})
