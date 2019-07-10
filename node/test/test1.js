var http = require('http');
http.createServer(function (req, res) {
    res.end('asd');
}).listen(8080);

var querystring = require('querystring');
console.log(JSON.stringify(querystring))