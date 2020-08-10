// const http = require('http'); // 引入http模块
// const url = require('url'); // 引入http模块
// const router = require('./moudle/common'); // 获取后缀名的自定义函数

// // 创建服务
// http.createServer(async (req, res) => {
//   router.static(req, res, './web')
//   const routerPath = url.parse(req.url).pathname.replace('/','')
//   console.log(routerPath)
//   try {
//     router[routerPath](req, res)
//   } catch (error) {
//     router['error'](req, res)
//   }

// }).listen(3001)
// console.log(`http://localhost:3001`) 










// 自行封装的类似express框架的路由
const http = require('http'); // 引入http模块
const url = require('url'); // 引入http模块
const app = require('./moudle/route'); // 获取后缀名的自定义函数

http.createServer(app).listen(3002)

app.get('/index', (req, res) => {
  console.log(req.url)
  // if(req.url)
  res.end('ok')
})






