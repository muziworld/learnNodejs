'use strict';
 
var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.');
//以输入的参数作为服务器的根目录，如果没有输入参数就将当前目录作为服务器根目录

console.log('Static root dic: ' + root);

var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);

    fs.stat(filepath,function(err,stat){
        if(!err && stat.isFile()){
            console.log('200 ' + request.url);
            response.writeHead(200);

        fs.createReadStream(filepath).pipe(response);

        }
        else{
            console.log('404',request.url);
            response.writeHead(404);
            response.end('404');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');

