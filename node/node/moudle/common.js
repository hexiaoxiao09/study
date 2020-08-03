
// 引入fs模块
const fs = require('fs')

function getMime(extname) {
  fs.readFile('../data/mime.json', (err, data) => {
    if(err){
      console.log(err)
      return
    }
    let JSONDATA = JSON.parse(data.toString())
    if(JSONDATA[extname]) {
      console.log(JSONDATA[extname])
    } else {
    }
  })
  // return new Promise((resolve, reject) => {
  //   fs.readFile('../data/mime.json', (err, data) => {
  //     if(err){
  //       console.log(err)
  //       return
  //     }
  //     let JSONDATA = JSON.parse(data.toString())
  //     if(JSONDATA[extname]) {
  //       resolve(JSONDATA[extname])
  //     } else {
  //       reject('json数据里没有该后缀文件')
  //     }
  //   })
  // })
}

module.exports = getMime
