
// 引入fs模块
const fs = require('fs')

function getMime(extname) {
  return new Promise((resolve, reject) => {
    fs.readFile('../data/mime.json', (err, data) => {
      if(err){
        console.log(err)
        reject(err)
      }
      console.log(data) 
      let JSONDATA = JSON.parse(data.toString())
      if(JSONDATA[extname]) {
        resolve(JSONDATA[extname])
      } else {
        reject('json数据里没有该后缀文件')
      }
    })
  })
}

// getMime('html').then(res => {
//   console.log(res)
// })

module.exports = getMime
