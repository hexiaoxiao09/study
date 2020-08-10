// 引入fs模块
const fs = require('fs')
const path = require('path') // 引入path模块
const url = require('url') // 引入url模块

function getMime(extname) {
  const res = fs.readFileSync('./data/mime.json')
  try {
    let JSONDATA = JSON.parse(res.toString())
    if (JSONDATA[extname]) {
      return JSONDATA[extname]
    } else {
      return 'text/html'
    }
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

// const router = (req, res, staticPath) => {
//   let pathname = url.parse(req.url).pathname // 格式化获取的地址，去掉get传值
//   pathname = pathname === '/' ? '/index.html' : pathname
//   let extname = path.extname(pathname) // path的extname模块获取文件的后缀名
//   extname = extname.replace('.', '')
//   if (pathname !== '/favicon.ico') {
//     const result = getMime(extname)
//     fs.readFile(`${staticPath}${pathname}`, (err, data) => {
//       if (!err) {
//         res.writeHead(200, { 'Content-Type': `${result};charset=utf-8` })
//         res.end(data)
//       }
//     })
//   }
// }
let router = {
  static(req, res, staticPath) {
    let pathname = url.parse(req.url).pathname // 格式化获取的地址，去掉get传值
    pathname = pathname === '/' ? '/index.html' : pathname
    let extname = path.extname(pathname) // path的extname模块获取文件的后缀名
    extname = extname.replace('.', '')
    if (pathname !== '/favicon.ico') {
      const result = getMime(extname)
      fs.readFile(`${staticPath}${pathname}`, (err, data) => {
        if (!err) {
          res.writeHead(200, { 'Content-Type': `${result};charset=utf-8` })
          res.end(data)
        }
      })
    }
  },
  
  index(req, res) {
    res.writeHead(200, { 'Content-Type': `text/html;charset=utf-8` })
    res.end('index')
  },

  about(req, res) {
    res.writeHead(200, { 'Content-Type': `text/html;charset=utf-8` })
    res.end('about')
  },

  contact(req, res) {
    res.writeHead(200, { 'Content-Type': `text/html;charset=utf-8` })
    res.end('contact')
  },

  error(req, res) {
    res.end('404页面')
  }

}
module.exports = router
