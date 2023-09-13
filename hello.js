var http=require('http');
var port=3030;
var server=http.createServer(function(req,res){
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.write("<h2>Hello World!</h2>");
    res.end();
});

server.listen(port);