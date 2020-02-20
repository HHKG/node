var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    if(req.url!=='/favicon.ico'){
        //判断用户所访问的页面地址
        if(req.url=='/home' ||req.url=='/'){
            res.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(__dirname+'/index.html').pipe(res);
        }else if(req.url=='/content'){
            res.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(__dirname+'/content.html').pipe(res);
        }else if(req.url=='/api/dosc'){
            res.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(__dirname+'/dosc.html').pipe(res);
        }
    }
})
server.listen(3333,'127.0.0.1');