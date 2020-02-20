//文件系统
//1、引入文件系统模块
var fs=require('fs');
//通过对象调用方法
// var readMe=fs.readFileSync('readMe','utf-8');//同步读取
// console.log(readMe);
// fs.writeFileSync('writeMe',readMe);//同步写入

//异步读取文件
fs.readFile('readMe','utf8',function(err,data){
    if(err) throw err;
    console.log(data);
})
console.log(1);
//异步写入文件
fs.writeFile('writeMe',readMe);

