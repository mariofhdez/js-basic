var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html; charset=UTF-8'});
    res.end('<H3>Servidor básico keep coding</h3>');
});

server.listen(1337, '127.0.0.1');
console.log('Server runing in 127.0.0.1:1337');