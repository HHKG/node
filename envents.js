//事件模块的用法

//引入事件模块
var events=require("events");

//创建eventEmitter对象
var myEmitter= new events.EventEmitter();

//注册事件
myEmitter.on("someEvent",function(msg){
    // console.log(msg);
    setImmediate(()=>{
        console.log(msg);
    });
});
//触发事件
myEmitter.emit("someEvent","实现事件并传递此参数到注册事件的回调函数中");

//默认是同步执行的，而当代吗中存在setImmediate(()=>{}),这里面的代码就会实现异步执行
console.log(1);