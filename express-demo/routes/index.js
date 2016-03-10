exports.viewtest = function(req,res){
	res.render('default',{title:"Hello Ashok",names:['Chandra','Sanjay']});
}

/*app.get('/',function(req,res){
	res.send("<h1>Hello Express World</h1>");
});*/
exports.index = function(req,res){ 
	res.render('default',{title:"Home",classname:'home',names:['Chandra','Sanjay']});
}
exports.about = function(req,res){
	res.render('default',{title:"About us",classname:'about'});
}

exports.whoname = function(req,res){
	var name =  req.params.name;
	res.send('<h1>'+"Hi "+name+'</h1>');
}


exports.whonametitle = function(req,res){
	var name = req.params.name;
	var title = req.params.title;
	res.send('<p>'+"Hi my name is "+name+" and people call me "+title+'</p>')
}
