

/* 
    app.get('/', (req, res) => {
      res.send('hello world')
    })
*/

const url = require('url')
let G = {}

let app = (req, res) => {
  let pathname = url.parse(req.url).pathname // 格式化获取的地址，去掉get传值
  if(G[pathname]) {
    G[pathname](req, res)
  } else {
    res.writeHead(200, { 'Content-Type': `text/html;charset=utf-8` })
    res.end('404页面')
  }
}

app.get = (targetPath, callback) => {
  
  G[targetPath] = callback

  /*
      G['/index'] = (req, res) => {
        res.end('hello world')
      }
  */
}


module.exports = app