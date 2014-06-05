/*
 观察者模式（Observer Pattern），也被称为“发布/订阅模型（publisher/subscriber model）”。
 在这种模式中，有两类对象，分别是“观察者-Observer”和“目标对象-Subject”。
 目标对象中保存着一份观察者的列表，当目标对象的状态发生改变的时候就主动向观察者发出通知（调用观察者提供的方法），从而建立一种发布/订阅的关系。
 这一种发布/订阅的关系常用于实现事件、消息的处理系统。
 在我们的生活中，也存在着许多观察者模式，最简单的例子就是“微博”。
 关注和被关注的关系，其实就是一个发布/订阅模型。假如，方舟子“悄悄关注”了天才韩寒，韩寒在微博上每发出一条消息都会反馈到方舟子的消息列表中，方舟子便可端坐家中，阴阴一笑，“嘿嘿，小子你干了什么我都知道……”，然后方舟子就开始行动了。
 */

/*
 使用观察者模式的好处：

 支持简单的广播通信，自动通知所有已经订阅过的对象。
 页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。
 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。
 */

/*
 观察者的使用场合就是：当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。
 总的来说，观察者模式所做的工作就是在解耦，让耦合的双方都依赖于抽象，而不是依赖于具体。从而使得各自的变化都不会影响到另一边的变化。
 */

var pubsub = {};
(function (q) {

  var topics = {}; // 回调函数存放的数组
  var subUid = -1;

  // 发布方法
  q.publish = function (topic, args) {

    if (!topics[topic]) {
      return false;
    }

    setTimeout(function () {
      var subscribers = topics[topic],
        len = subscribers ? subscribers.length : 0;

      while (len--) {
        subscribers[len].func(topic, args);
      }
    }, 0);

    return true;

  };
  //订阅方法
  q.subscribe = function (topic, func) {

    if (!topics[topic]) {
      topics[topic] = [];
    }

    var token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func
    });
    return token;
  };
  //退订方法
  q.unsubscribe = function (token) {
    for (var m in topics) {
      if (topics[m]) {
        for (var i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return false;
  };
}(pubsub));

//使用方式如下

//来，订阅一个
pubsub.subscribe('example1', function (topics, data) {
  console.log(topics + ": " + data);
});

//发布通知
pubsub.publish('example1', 'hello world!');
pubsub.publish('example1', ['test', 'a', 'b', 'c']);
pubsub.publish('example1', [
  { 'color': 'blue' },
  { 'text': 'hello'}
]);