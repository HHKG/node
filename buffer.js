//缓存区
var fs=require('fs');

//读取文件流
var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf8');

//写入文件流
var myWriteStream=fs.createWriteStream(__dirname+'/writeMe.txt')
// console.log(myReadStream);
myReadStream.on('data',function (chunk) {
    console.log('正在接收一部分数据=======================');
    myWriteStream.write(chunk);
    console.log(chunk);
})