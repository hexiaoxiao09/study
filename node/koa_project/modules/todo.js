// 引入mysql的配置文件
const db = require('../config/db')

// 引入sequelize对象
const Sequelize = db.sequelize

// 引入数据表模型
const todo = Sequelize.import('../schema/todo')
todo.sync({ force: false }) //自动创建表

class TodoModel {
  /**
   * 创建todo模型
   * @param data
   * @returns {Promise<*>}
   */
  static async createTodoList(data) {
    return await todo.create({
      title: data.title, //标题
      author: data.author, //作者
      content: data.content, //文章内容
    })
  }

  /**
   * 查询详情
   * @param id ID
   * @returns {Promise<Model>}
   */
  static async getToDoDetail(id) {
    return await todo.findOne({
      where: {
        id,
      },
    })
  }
}

module.exports = TodoModel
