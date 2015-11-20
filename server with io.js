/* Simple server with I/O features */
var http = require('http');
var fs = require('fs'); //File system module

http.createServer(function(req,res){ 
if(req.url === '/favicon.ico'){  //Check for this file because browsers request this file unexpectedly
	return res.end("Illegal request");
}
console.log('Incoming request to'+req.url);

var i = 2;
res.writeHead(200,{'Content-Type':'text/plain'});
setTimeout(function(){//call back function
	fs.readFile(__filename,{ //file name is filename(req.url) Ex:127.0.0.1:1337/coded9 here coded9 is filename
		encoding:'utf8'
	},function(error,contents){
		if(error){
			console.error(error);
			return res.end();
		}
		console.log('sending response for '+req.url);
		res.end(contents);
	});
},5000);
while(i--){ //Synchornous code
	console.log('Loop value:'+i+'\r');
 }
}).listen(1337,'127.0.0.1');
console.log('Server running at localhost:1337');
