var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine','ejs');
app.locals.pagetitle ="My Website"

app.get('/',routes.index);
app.get('/about',routes.about);
app.get('/who/:name?',routes.whoname);
app.get('/who/:name?/:title?',routes.whonametitle);

app.get('*',function(req,res){
	res.send("Bad route");
});

var server = app.listen(3000,function(req,res){
	console.log("Listening on port 3000");
});