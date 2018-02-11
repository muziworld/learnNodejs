'use strict';

var s = 'hello';

function greet(name){
    console.log( `${s}, ${name}!`);
}
function greetA(name){
    console.log( `Funck you! ${name}!`);
}
//一个文件只能暴露一个对象
module.exports = greet;
module.exports = greetA;
module.exports = function(){
    console.log("Why do you call me? I know nothing.")
}
//如果想导出多个对象，就把他们放在一个对象里即可