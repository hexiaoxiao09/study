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
    if (req.title && req.author && req.content) {
      try {
        //创建待完成项目模型
        const ret = await todoModule.createArticle(req)
        ret.response.status = 200
        ret.body = {
          code: 200,
          msg: '事件创建完成',
          data: [],
        }
      } catch (err) {
        ctx.response.status = 412
        ctx.body = {
          code: 412,
          msg: '事件创建失败',
          data: err,
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        msg: '参数不齐全',
        data: [],
      }
    }
  }
}

module.exports = TodoController;
