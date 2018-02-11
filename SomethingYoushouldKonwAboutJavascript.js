//快速入门
    //基本语法
    var a = 1;  //赋值
    //其它：注释， {}语句块，区分大小写，行尾自动补分号（！有时这个特性会造成语法错误）

    //数据类型和变量：类C语言，不过更灵活。
    //字符串：ES6支持多行字符串
    console.log(`这是一个
多行
字符串`);
    /*字符串内加变量名的用法 */
    var name = '小明';
    var age = 20;
    var message = `你好, ${name}, 你今年${age}岁了!`;
    console.log(message);

    //数组:十分灵活
    var myarray = [1,2,'hello ubuntu',[4,5]];
    console.log(myarray.length);
    console.log(myarray[2]);

    //对象:键值对集合

    //条件判断：if else等 与C没区别
    //循环
    // for ...in 遍历 对象

    //Map和Set
    // Map: Number 可做键， 查询速度快

    //iterable 一类类型， 支持 for ...of , forEach

//函数
    //函数的定义和调用
    var myfoo = function(){};   //相比与C, 还可以这样玩
    //附赠arguments ,rest 关键字

    //变量作用域与解构赋值
    //全局作用域， 函数作用域， let关键字可以定义块状作用域
    // 解构赋值：对一些变量一起赋值

    //方法
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
    };
    console.log(xiaoming.age());
    // 关于this 关键字，根据 content 而定
    // apply() call() 可以改变this指针的指向
    var tree = {
        hight:60,
        place:'countryside',
    }
    function growUp(){
        return this.hight += 1;
    }

    growUp.apply(tree,[]);
    console.log(tree.hight);    //61
    // 修饰器 ： 改变类的对象的行为

    //高阶函数：接受函数作为函数的参数
        // map/reduce filter sort 等  
    //闭包：通过函数内的函数实现外界对函数内局部变量的访问
    //箭头函数: x => x*x; 类匿名函数的一种语法糖
    //generator： 用function* 定义 可通过 yield 关键字多次返回，z执行完所有yield 返回
    function* foo(x) {
        yield x + 1;
        yield x + 2;
        return ;
        yield x + 4;
        //return x + 3;
    }
    var r = foo(4);
    for(var x of r){
        console.log(x);  // 5 6 8
    }

//标准对象
    //Date  时间相关
    //RegExp    匹配相关
    var re1 = /ABC\-001/;
    var re2 = new RegExp('ABC\\-001');
    //JSON  JavaScript Object Notation 数据交换格式
//面向对象的编程
    //创建对象 JavaScrpit一切皆是对象，原型链
    //原型继承  原型链
    //class继承   用class 加 关键字 extends 实现， 参考C++
//浏览器
    //浏览器对象 window 关于浏览器的一切对象和方法
    //操作DOM  文件对象模型 用于操作网页
        //操作表单
        //操作文件
        //AJAX ：用JavaScript执行异步网络请求， 主要用 XMLHttpREQUEST对象
        //Promise   承诺将来会执行,一种异步代码简化的解决方案
        //Canvas    可用于绘图，htnl5游戏制作
//JQuery: 最早的跨浏览器支持库
    //选择器
    //操作DOM
        //事件
        //动画
        //AJAX
        //扩展
//错误处理 ： 使用try ... catch ... finally处理错误
    //错误传播  决定在什么时候捕获错误，并统一处理
    //异步错误处理 考虑异步代码中有些代码的执行时机
//underscore： 提供一系列函数式编程接口
    // Collections
    // Arrays
    // Functions
    // Objects
    // Chaining
