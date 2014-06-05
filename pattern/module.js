var Module = function() {};

//扩展Class函数

Module = (function(m) {
    m.newFunc = function() {
        console.log("这里是扩展的新方法");
    };
    return m;
})(Module || {});

Module.newFunc();

//练习
Module = (function(m) {
    m.say = function() {
        console.log(2);
    }
    return m;
})(module || {});