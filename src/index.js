const Koa = require('koa')
const router = require('./router/index')
const Views = require('koa-views')
const app = new Koa()


app.use(router.routes())



app.listen(3000)