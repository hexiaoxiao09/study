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
router.get('/todolist/detail/:id', TodoController.detail)

//查询所有数据
router.post('/todolist/getAll', TodoController.getAll)

module.exports = router
