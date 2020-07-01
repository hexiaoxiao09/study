const Router = require('koa-router')
const TodoController = require('../controllers/todo')

const router = new Router({
  prefix: '/api/v1',
})

/**
 * 文章接口
 */
//创建事件
router.post('/todolist/create', TodoController.create)

//获取文章详情
router.get('/todolist/detail', function (ctx, next) {
  ctx.body = 'this is a /todolist/detail response'
})

module.exports = router
