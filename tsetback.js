//学习java返回值规律

function a(){
  console.log('a');
  return false;
}

function b(){
  a();
  (function(){
    console.log('nimig');
    return 1;
  })();
  console.log('b');
  return true;
}

(function c(){
  console.log(b());
})()
