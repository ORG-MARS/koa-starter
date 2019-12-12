process.env.SERVICE_ID = 'ttboef6v7njs7s'
process.env.SERVICE_TOKEN = '16add734-5122-4be9-a245-726ccd87517f'

const app = require('./src/app')

// 导出 http handler, koa 对象不可直接作为 http handler, 需要调用 callback() 获取
module.exports = app.callback()

// 当此文件作为入口文件时执行
// 为本地调试提供
if (!module.parent) {
  app.listen(3001)
  console.log('api server started: http://localhost:3001')
}
