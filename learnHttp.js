'use strict';

// //导入http模块
// var http = require('http');

// //创建http server , 并传入回调函数
// var server = http.createServer(function(request,response){
//     console.log(request.method + ':' + request.url);
//     response.writeHead(200,{'Content-Type':'text/html'});
//     response.end('<h1>Hello Nodejs!</h1>');
// });

// server.listen(8080);

// console.log('Server is running at http://127.0.0.1:8080/');

//url
// var url = require('url');

// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
// var path = require('path');

// var workDir = path.resolve('.');  返回当前目录

// var filePath = path.join(workDir,'pub','index.html');
var path = require("path");

// 格式化路径    '.' 表示当前目录， '..' 表示上一级目录
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/.'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash','.'));


// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));