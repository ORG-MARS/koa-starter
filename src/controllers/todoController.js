const todoService = require('../services/todoService')

class TodoController {
  
  async listAll (ctx) {
    let list = await todoService.listAll()
    ctx.body = { list }
  }
  
  async create (ctx) {
    let { title, done = false } = ctx.request.body
    let result = await todoService.create({ title, done })
    ctx.body = { result }
  }
  
  async delete (ctx) {
    await todoService.delete(ctx.params.id)
    ctx.body = { ok: true }
  }
  
  async deleteAll (ctx) {
    await todoService.deleteAll()
    ctx.body = { ok: true }
  }
  
  async done (ctx) {
    await todoService.update(ctx.params.id, { done: true })
    ctx.body = { ok: true }
  }
  
  async undone (ctx) {
    await todoService.update(ctx.params.id, { done: false })
    ctx.body = { ok: true }
  }
}

module.exports = new TodoController()
