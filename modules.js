//导出多个对象

var ob1 = 'Hello';

var ob2 = [1,2, 3,4];



var obs = {
    greet1:ob1,
    greet2:ob2,
    greet3:function ob3(name){
        console.log(`Hello ${name}!`);
    }
}

module.exports = obs;