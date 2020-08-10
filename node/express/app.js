const http = require('http')
const app = require('./module/route')

http.createServer(app).listen(3000)

app.get('/index', (req, res) => {
  
})
