
var x=10;
var y=20;

function add(a,b){
	return x+y;
}

var result=add(x,y);

console.log('计算结果是'+result);
console.log('hello world');



for(var i=0, i<10, i++){
	for(var j=0, j<=i, j++){
		process.stdout.write('* ')
	}
	console.log();
}