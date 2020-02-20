//引入文件系统模块
var fs=require('fs');
//使用模块对象调用方法
// fs.unlink('writeMe',function(err){
//     if(err) throw err;
//     console.log("删除成功");
// });
// fs.unlink('writeMe');
//创建文件夹
// fs.mkdir('writeMe.txt',function(err){
//     if(err)
//         throw err;
//     console.log('文件创建成功');
// });
// fs.rmdir('writeMe.txt',function(){
//     console.log("删除文件成功");
// })
// fs.readFile('readMe.txt','utf8',function(err,data){
//     if(err)
//         throw err;
//     fs.writeFile('writeMe.txt',data,function(){
//         console.log('writeMe写入的内容是:'+data);
//     });
// })
// fs.mkdir('ceshi',function(err){
//     if(err)
//         throw err;
//     console.log('创建一个ceshi根目录');
//     fs.mkdirSync('./ceshi/readMe.txt',function(err){
//         if(err)
//             throw err;
//         console.log("创建readMe.txt成功！")
//     })
// })
fs.rmdir('./ceshi/readMe.txt',function(err){
    if (err)
        throw err;
    fs.rmdir('ceshi',function(err){
        if(err)
            throw err;
        console.log('删除文件成功');
    })
});

