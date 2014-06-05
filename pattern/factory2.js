/*
 简单工厂模式是由一个方法来决定到底要创建哪个类的实例, 而这些实例经常都拥有相同的接口.
 这种模式主要用在所实例化的类型在编译期并不能确定， 而是在执行期决定的情况。
 说的通俗点，就像公司茶水间的饮料机，要咖啡还是牛奶取决于你按哪个按钮。

 实际上在js里面，所谓的构造函数也是一个简单工厂。只是批了一件new的衣服. 我们扒掉这件衣服看看里面。
 通过这段代码, 在firefox, chrome等浏览器里，可以完美模拟new.
 */

var Car = (function () {
  var Car = function (model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  };
  return function (model, year, miles) {
    return new Car(model, year, miles);
  };
})();

var tom = new Car("Tom", 2009, 20000);
var dudu = new Car("Dudu", 2010, 5000);


//不好理解的话，我们再给一个例子：

var productManager = {};

productManager.createProductA = function () {
  console.log('ProductA');
}

productManager.createProductB = function () {
  console.log('ProductB');
}

productManager.factory = function (typeType) {
  return new productManager[typeType];
}

productManager.factory("createProductA");

//如果还不理解的话，那我们就再详细一点咯，假如我们想在网页面里插入一些元素，而这些元素类型不固定，可能是图片，也有可能是连接，甚至可能是文本，根据工厂模式的定义，我们需要定义工厂类和相应的子类，我们先来定义子类的具体实现（也就是子函数）：
var page = page || {};
page.dom = page.dom || {};
//子函数1：处理文本
page.dom.Text = function () {
  this.insert = function (where) {
    var txt = document.createTextNode(this.url);
    where.appendChild(txt);
  };
};

//子函数2：处理链接
page.dom.Link = function () {
  this.insert = function (where) {
    var link = document.createElement('a');
    link.href = this.url;
    link.appendChild(document.createTextNode(this.url));
    where.appendChild(link);
  };
};

//子函数3：处理图片
page.dom.Image = function () {
  this.insert = function (where) {
    var im = document.createElement('img');
    im.src = this.url;
    where.appendChild(im);
  };
};

//那么我们如何定义工厂处理函数呢？其实很简单：
page.dom.factory = function (type) {
  return new page.dom[type];
}

//使用方式如下：

var o = page.dom.factory('Link');
o.url = 'http://www.cnblogs.com';
o.insert(document.body);

/*
 至此，工厂模式的介绍相信大家都已经了然于心了，我就不再多叙述了。
 总结
 什么时候使用工厂模式
 以下几种情景下工厂模式特别有用：

 对象的构建十分复杂
 需要依赖具体环境创建不同实例
 处理大量具有相同属性的小对象
 什么时候不该用工厂模式

 不滥用运用工厂模式，有时候仅仅只是给代码增加了不必要的复杂度，同时使得测试难以运行下去。
 */