// var stuff=require('./stuff');
// console.log(stuff.counter(["张三","李四","黄五"]));
// console.log(stuff.adder(10,100));
// console.log("Hello World!");
// //定时器
// setTimeout(function(){
//     console.log("3 seconds has passed");
//     console.log("change");
// },3000);
//
// var time=0;
// var thimer=setInterval(function(){
//     time+=2;
//     console.log(time+"seconds has passed");
//     if(time>4){
//         clearInterval(thimer);
//     }
// },2000);
// //路径
// console.log(__dirname);//打印出的路劲不包含本文件
// console.log(__filename);//打印出来的路劲包含本文件
// //global
// console.log(global);
// //电脑不认识javascript但是电脑认识js引擎,js引擎的作用是让电脑可以识别当前的js代码，node.js的底层是c++写的，node.js的核心是v8引擎，v8引擎的作用是让电脑识别js代码




//引入express框架
var express=require('express');

//实例化一个express对象；
var app=new express();

//想要使用ejs必须先配置ejs引擎
app.set('view engine','ejs');
//通过对象调用对应的方法
app.get('/',function(req,res){
    // res.send(__dirname+'/index.html');//向客户传送纯文本
    res.sendFile(__dirname+'/index.html');//向客户端传输文件
})
//获取用户输入的路有参数
app.get('/profile/:id',function(req,res){
    var data=[{name:'张三',age:'18',position:'web前端'},{name:'李四',age:'18',position:'数据分析'},{name:'王五',age:'18',position:'java后端'}];
    res.render('profile',{webSite:req.params.id,data:data});
})


//监听服务器端口
app.listen(8888);
