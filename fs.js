


//实现文件写入操作


//1、加载文件操作模块，fs模块

//var fs=require('fs');

//2、实现文件写入操作
//var msg='sdfsfsdfsf';

//调用fs.writeFile()进行文件写入
/**fs.writeFile('./hello.txt',msg, 'utf8', function(err){
	//如果 err ===null，表示写入文件成功
	if(err){
		console.log('写文件出错了' +err);
	} else {
		console.log('ok');
	}

});
**/

//实现文件读取操作


//1、加载文件操作模块，fs模块
var fs = require('fs');

//1.1、在读取文件的时候，不传utf8

/**fs.readFile('./hello.txt', function(err, data){
	if(err){
		throw err;
	}

	//data 参数的数据类型是一个buffer对象，里面保存的就是一个一个的字节（理解为字节数组）
	//把buffer对象转换为字符串，调用toString()方法,如果不传utf8参数，默认也是utf8
	console.log(data.toString('utf8'));
});

**/

//1.2、在读取文件的时候，传utf8
fs.readFile('./hello.txt', 'utf8', function(err, data){
	if(err){
		throw err;
	}

	console.log(data);
});