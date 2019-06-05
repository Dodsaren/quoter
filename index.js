const getRandomQuote = require('get-random-quote')
const Koa = require('koa')
const router = require('koa-router')()

function main() {
  const app = new Koa()
  router.get('/', async ctx => {
    ctx.body = await getRandomQuote()
  })
  app.use(router.routes())
  app.listen(3000)
}

main()
