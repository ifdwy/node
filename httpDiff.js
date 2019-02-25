
var http = require('http');

http.createServer(function(req, res){

	//获取用户请求的路径req.url
	console.log(req.url);
	//解决中文乱码问题
	res.setHeader('Content-Type', 'text/html; charset= utf-8');

	//通过req.url获取用户请求的路径响应不同的数据

	if(req.url ==='/' || req.url ==='/index'){
		res.end('hello1')
	}
	else if(req.url ==='/login'){
		res.end('hello2')
	}else{
		res.end('404, NOT FOUND！ 服务器端错误')
	}

}).listen(8080, function(){
	console.log('http://localhost:8080');
});
