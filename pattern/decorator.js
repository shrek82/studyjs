/*
 装饰器模式是一种保持接口一致，同时强化对象、函数功能的设计方法。
 装饰很好理解，女士们出门前要给自己化化妆，这就是一种装饰——人还是那个人（保持接口一致），但是样子变了不少（强化了功能）。
 */
var decorateFun = function (orig, before, after) {
  var Decorator = function () {
    var args = arguments, result, i;
    if (before && typeof before == 'function') {
      //前置方法可对参数进行修改
      args = before.apply(this, args) || args;
    }
    result = orig.apply(this, args);
    if (after && typeof after == 'function') {
      //后置方法可对结果进行修改
      result = after.apply(this, [result, args]) || result;
    }
    return result;
  }
  //由于函数也是对象, 因此要将其属性都复制过来
  for (i in orig) {
    if (orig.hasOwnProperty(i)) {
      Decorator[i] = orig[i];
    }
  }
  Decorator.prototype = org.prototype;
  //保留原始函数对象, 以备复原
  Decorator.originalFunction = orig;
  return Decorator;
}

//这是一个漂亮女孩
var girl = {
  leer: function () {
    alert('漂亮女孩抛媚眼');
  }
}
//给女孩打扮一下
girl.leer = decorateFun(girl.leer,
  function () {
    alert('化妆之后眼睛好漂亮');
  },
  function () {
    alert('好多男生拜倒在石榴裙下')
  }
)
//女孩开始抛媚眼了
girl.leer();
//输出：
//化妆之后眼睛好漂亮
//漂亮女孩抛媚眼
//好多男生拜倒在石榴裙下