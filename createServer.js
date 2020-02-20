//通过http模板，创建本地服务器
var http=require('http');

//创建服务器方法
var server=http.createServer(function(req,res){
    console.log('客户端向服务器发送请求'+req.url);
//    写一个响应头
    res.writeHead(200,{"Content-type":"text/plain"});//决定数据类型，plain是存文本数据
    res.end("server is woking");
});
//服务器对象监听服务器地址以及端口号
server.listen(8888,'127.0.0.1');
console.log("server is running....");