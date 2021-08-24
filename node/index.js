//引入http模块
var http = require("http");
//设置主机名
var hostName = '110.42.129.142';
//设置端口
var port = 443;
//创建服务
var server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end("hello nodejs");

});
server.listen(port,hostName,function(){
    console.log(`服务器运行在http://${hostName}:${port}`);
});