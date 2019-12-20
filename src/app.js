const path = require('path')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const todoRouter = require('./routers/todo')
const Koa = require('koa')
const app = new Koa()

// 中间件定义
app.use(koaStatic(path.join(__dirname, '../public')))
app.use(koaBody())
app.use(async function errorHandler (ctx, next) {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = { error: err.message }
  }
})

// 路由定义
app.use(todoRouter)

module.exports = app
