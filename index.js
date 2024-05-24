const http = require('http');

http.createServer(function(req, res){
     res.end(`<h1> node js</h1>`)
}).listen(3030)