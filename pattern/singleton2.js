function fun() {
  if (typeof fun.instance === 'object') {
    return fun.instance;
  }
  this.start_time=0;
  fun.instance=this;
}

var fun1 = new fun();
var fun2 = new fun();

console.log(fun1 == fun2);