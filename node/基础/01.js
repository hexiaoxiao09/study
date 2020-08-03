

// 引入http模块
const http = require('http');
// 引入url模块
const url = require('url')
// 引入fs模块
const fs = require('fs')

/* 
 * 创建服务
 * request   获取客户端传过来的信息
 * response  给浏览器响应的信息
 */
http.createServer((request, respose) => {

    // 设置响应头
    respose.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    const getUrl = request.url
    if (getUrl !== '/favicon.ico') {
        let obj = url.parse(getUrl, true).query
        console.log(`获取到的参数是姓名:${obj.name},年龄:${obj.age},工作:${obj.job}`)
    }


    // 给页面输出内容并且响应结束
    respose.end('Hello World Node.js 中文');
    // response.end()   // 结束响应

}).listen(8010);    // 监听端口

console.log('Server running at http://localhost:8010/');







