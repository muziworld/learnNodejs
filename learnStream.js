//sream 
'use strict';

var fs = require('fs');

//打开一个stream
//var rs = fs.createReadStream('sample.txt','utf-8');
var kase = 1;

//在 visual Studio 中会被以code=null 的形式终止，
// 但在终端中会看到 END 标志，完整输出
// rs.on('data',function(chunk){
//     kase ++;
//     console.log('DATA');
//     console.log(chunk);
//     console.log(kase);  //最后的结果是 12
// });

// rs.on('end',function(){
//     console.log('END');
// });

// rs.on('error',function(err){
//     console.log('ERROR: ' + err);
// });

// var ws1 = fs.createWriteStream('output1.txt','utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();


// var ws2 = fs.createWriteStream('output2.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...','utf-8'));    //最后还是以utf-8的形式储存
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

//读写一下图片如何？
// var rs = fs.createReadStream('test.png');
// var ws3 = fs.createWriteStream('outPic.png');

// rs.on('data',function(chunk){
//     ws3.write(chunk);
// })

// rs.on('end', function(chunk){
//     ws3.end();
// })  // 测试成功， 图片正确输出，至少眼睛看是一样的


//pipe 似乎就是上面复制图片程序的一个打包

// var rs = fs.createReadStream('sample.txt');
// var ws = fs.createWriteStream('copied.txt');

// rs.pipe(ws);

//如果读的文件不存在了？
// var rs = fs.createReadStream('ample.txt');  //会报错
// var ws = fs.createWriteStream('copied.txt');

// rs.pipe(ws);

//带错误检查的代码试一试
// try{
//     var rs = fs.createReadStream('test.txt');
// }catch(err){
//     console.log("Error");   //会抛出错误，但并不会打印：Error
// }

// var ws = fs.createWriteStream('copied.txt');

// rs.pipe(ws);

//试试图片
// var rs = fs.createReadStream('test.png');  //会报错
// var ws = fs.createWriteStream('copied.png');

// rs.pipe(ws);    //Ok, 成功输出

//试试有意义的，给文件换一个文件夹
var rs = fs.createReadStream('test.png');  //会报错
var ws = fs.createWriteStream('./image/copied.png');

rs.pipe(ws);    //Ok 