
const url = require('url')

let serve = () => {

  let G = {
    _get: {},
    _post: {},
    staticPath: 'static'
  }

  let app = (req, res) => {
    const reqMethod = req.method.toLowerCase()  // 获取请求类型
    const pathname = url.parse(req.url).pathname
    if(reqMethod === 'get') {
      if(G._get[pathname]) {
        G._get[pathname](req, res)
      }else{
        res.end('404页面')
      }
    }else if(reqMethod === 'post') {
      let postData = '' 
      req.on('data',(chunk) => {
        postData += chunk
      })
      req.on('end',() => {
        res.body = postData
        G._post[pathname](req, res)
      })
      if(G._post[pathname]) {
        G._post[pathname](req, res)
      }else{
        res.end('404页面')
      }
    }
  }

  app.get = (targetPath, callback) => {
    G._get[targetPath] = callback
  }

  app.post = (targetPath, callback) => {
    G._post[targetPath] = callback
  }

  return app
}



module.exports= serve()