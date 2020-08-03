const http = require('http'); // 引入http模块
const fs = require('fs');     // 引入fs模块
const path = require('path');     // 引入path模块
const url = require('url');     // 引入url模块
const getMime = require('./moudle/common'); // 获取后缀名的自定义函数

// 创建服务
http.createServer(async (req, res) => {
  let pathname = url.parse(req.url).pathname; // 格式化获取的地址，去掉get传值
  pathname = pathname==='/'? '/index.html': pathname
  let extname = path.extname(pathname); // path的extname模块获取文件的后缀名
  if(pathname !== '/favicon.ico') {
    // const result = await getMime(extname)
    // console.log(result)
    // fs.readFile('./web'+pathname, (err, data) => {
    //   if(err) {
    //     res.writeHead(200, {'Content-Type': `text/html;charset=utf-8`})
    //     res.end('404页面')
    //   }
    //   let mime = getMain(extname)
    //   res.writeHead(200, {'Content-Type': `${mime};charset=utf-8`})
    //   res.end(data)
    // }) 
  }
}).listen(3001)
// console.log(getMime('html'))
console.log(`http://localhost:3001`)
