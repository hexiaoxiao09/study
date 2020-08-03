const todoModule = require('../modules/todo')

class TodoController {
  /**
   * 创建待完成列表
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async create(ctx) {
    // 接收客户端传参
    let req = ctx.request.body
    if (req.title && req.author && req.content && req.status) {
      try {
        // status 状态  0--待完成   1--已完成
        // if (req.status == 0) {
        //   req.status = '待完成'
        // } else if(req.status == 1) {
        //   req.status = '已完成'
        // } else {
        //   ctx.response.status = 400
        //   ctx.body = {
        //     code: 400,
        //     msg: '参数错误',
        //     data: [],
        //   }
        //   return
        // }
        //创建待完成项目模型
        const ret = await todoModule.createTodoList(req)
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: '事件创建完成',
          data: [],
        }
      } catch (err) {
        ctx.response.status = 412
        // ctx.body = req
        ctx.body = {
          code: 412,
          msg: '事件创建失败',
          data: err,
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 200,
        msg: '参数不齐全',
        data: [],
      }
    }
  }
  
  // 查询所有数据  
  static async getAll(ctx) {
    let req = ctx.request.body
    if (req) {
      try {
        let data = await todoModule.getAllToDoDetail(req.status)
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data
        }
      } catch (err) {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: '查询失败',
          data: err,
        }
      }
    } else {
      try {
        let data = await todoModule.getAllToDoDetail()
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data
        }
      } catch (err) {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: '查询失败',
          data: err,
        }
      }
    }
  }


  // 根据id查
  static async detail(ctx) {
    let id = ctx.params.id
    if (id) {
      try {
        let data = await todoModule.getToDoDetail(id)
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data
        }
      } catch (err) {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: '查询失败',
          data: err,
        }
      }
    } else {
      ctx.response.status = 416
      ctx.body = {
        code: 200,
        msg: '缺少参数',
        data: [],
      }
    }
  }
}

module.exports = TodoController
