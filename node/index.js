var http = require('http');
http.createServer(function(req,res){
    res.write('<head><meta charst = "utf-8"/></head>');
    res.write("hello")
}).listen(3000)