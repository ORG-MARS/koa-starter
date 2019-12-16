const app = require('./src/app')

// 导出 http handler, koa 对象不可直接作为 http handler, 需要调用 callback() 获取
module.exports = app.callback()
