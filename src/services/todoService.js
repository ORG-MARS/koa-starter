const todoTable = require('../models/todoTable')
const larkcloud = require('@byted/larkcloud-api')
const ObjectId = larkcloud.db.ObjectId

class TodoService {
  async listAll () {
    let all = await todoTable.where().find()
    return all
  }
  
  async create (todo) {
    return await todoTable.save(todo)
  }
  
  async delete (id) {
    let result = await todoTable.where({ _id: ObjectId(id) }).delete()
    if (result.deletedCount === 0) {
      let error = new Error(`todo:${id} not found`)
      error.status = 404
      throw error
    }
  }
  
  async deleteAll () {
    await todoTable.where().delete()
  }
  
  async update (id, updater) {
    let todo = await todoTable.where({ _id: ObjectId(id) }).findOne()
    if (!todo) {
      let error = new Error(`todo:${id} not found`)
      error.status = 404
      throw error
    }
    Object.assign(todo, updater)
    await todoTable.save(todo)
  }
}

module.exports = new TodoService()
