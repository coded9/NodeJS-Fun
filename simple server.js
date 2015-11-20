/* Simple server running at port 1337 */
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World\n');
}).listen(1337,'127.0.0.1');
console.log('Server running at localhost:1337');

/*Version 2 */
var http = require('http');
var colors = require('colors');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end("<h1 style='color:blue'>Hello World</h1>\n");
}).listen(1337,'127.0.0.1');
console.log('Server running at localhost:1337'.green);
