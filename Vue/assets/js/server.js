var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('hello world123!')
}).listen(8888);