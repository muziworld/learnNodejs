//'use strict';
//read file

 var fs = require('fs');

 //fs.readFile(filename,callbackFunction(err,data))
// fs.readFile('test0.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//         console.log(data.length);
//         // Buffer to String
//          var text = data.toString('utf-8');  
//         console.log(text);  //显示原文
//     }
// });
//同步读文件
// var data = fs.readFileSync('test0.txt','utf-8');
// //这个数据会显示在前面
// console.log(data);

//包含错误检查的同步读文件
// try{
//     var data = fs.readFileSync('test.txt','utf-8');
//     console.log(data);
// }catch(err){
//     console.log(err);   //错误信息与异步读不同，不过程序还是会继续执行下去
// }

//readFile 默认先放在 Buffer 中
// var test = 'how do you do?'
// var buf = Buffer.from(test,'utf-8');
// var myString = buf.toString();


//这个结果会在前面显示，因为fs.readFile是异步的，在文件读完后才会根据状态执行
// console.log(buf);
// console.log(myString);


// //read picture
// fs.readFile('test.png',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//         console.log(data.length + 'bytes');
//     }
// });

//写文件

var data = 'I\'m tired, Can you tell me a joke?';
var buData = Buffer.from(data,'utf-8');
//console.log(buData);
//fs.writeFile(newFileName,fileContent,callbackFunction(err))
fs.writeFile('test01.txt',buData,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('You are lucky, Write Successfully!');
    }
})
console.log(buData);
//writeFileSync(newFileName,fileContent) 用法同上
//fs.writeFileSync('testSync.txt',data);
//带错误检查的writeFileSync
try{
    fs.writeFileSync('testSyncFe.txt',data);
}catch(err){
    console.log(err);
}   //ok

//stat
// fs.stat('test.png',function(err,stat){
//     if(err){
//         console.log(err);
//     }else{
//         //是否为文件
//         console.log('isFile:' + stat.isFile());
//         //是否为目录
//         console.log('isDirectory: ' + stat.isDirectory());
//         if(stat.isFile()){
//             //文件的大小：
//             console.log('size: ' + stat.size);
//             //创建时间， Date对象
//             console.log('birth time: ' + stat.birthtime );
//             //修改时间
//             console.log('modified time:'+ stat.mtime);
//         }
//     }
// });

var stat = fs.statSync('test.png');
console.log("isFile: " + stat.isFile());
console.log('isDiretory: ' + stat.isDirectory());
if(stat.isFile()){
    console.log('size: ' + stat.size + 'bytes');
    console.log('birth time: ' + stat.birthtime);
    console.log('modified time: ' + stat.mtime);
}