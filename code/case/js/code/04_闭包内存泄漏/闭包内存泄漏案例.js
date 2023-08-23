function creatFnArray() {
  // fill()将数组中的值转化成静态值，默认从0开始到数组结束
  // 占据的空间是4M x 100
  var arr = new Array(1024 * 1024).fill(1)
  return function() {
    console.log(arr.length)
  }
}

setTimeout(() => {
  var res = [];
  for(var i = 0; i < 100; i++) {
    setTimeout(() => {
      res.push(creatFnArray())
    }, i * 100)
  }
}, 5000);

setTimeout(() => {
  for(var i = 0; i < 50; i++) {
    setTimeout(() => {
      res.pop()
    }, i * 100)
  }
}, 10000);

