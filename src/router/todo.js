const Router = require('@koa/router')
const router = Router({
  prefix:'/api/todo'
})

const todoController = require('../controller/todoController')

router.put('/:id/done', todoController.done)

router.put('/:id/undone', todoController.undone)
// List all posts.
router.get('/', todoController.listAll)

// Create a post.
router.post('/', todoController.create)

// Delete a post.
router.delete('/:id', todoController.delete)
// Delete all posts.
router.delete('/', todoController.deleteAll)



module.exports = router.routes()
