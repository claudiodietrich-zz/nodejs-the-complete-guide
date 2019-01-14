const http = require('http')
const { routesHandler } = require('./routes')

http.createServer(routesHandler).listen(3000)