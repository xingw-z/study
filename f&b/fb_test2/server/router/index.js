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

router.post('/test', async (ctx, next) => {
  ctx.body = {
    "ret":0,
    "msg":"抽奖成功",
    "result":
    [
      {
        "id":"123",
        "orgId":123,
        "userId":123,
        "externalUserId":"123",
        "oriShareUserId":"123",
        "dirShareUserId":"123",
        "shareType":"test",
        "redPacket":0,
        "challengeState":"尚未挑战"
      },
      {
        "id":"123",
        "orgId":123,
        "userId":123,
        "externalUserId":"123",
        "oriShareUserId":"123",
        "dirShareUserId":"123",
        "shareType":"test",
        "redPacket":0,
        "challengeState":"还差一步挑战"
      },
      {
        "id":"123",
        "orgId":123,
        "userId":123,
        "externalUserId":"123",
        "oriShareUserId":"123",
        "dirShareUserId":"123",
        "shareType":"test",
        "redPacket":20,
        "challengeState":"成功挑战"
      }
    ] 
  }
})

module.exports = router