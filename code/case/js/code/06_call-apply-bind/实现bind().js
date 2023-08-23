Function.prototype.yrBind = function(thisArg, ...arys) {
  // 1. 获取被执行的函数
  var fn = this
  // 2. 设置thisArg为对象类型
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  function proxFn(...args) {
    // 3. 将函数放到thisArg中调用
    thisArg.fn = fn
    // 对两个参数进行合并
    var failArgs = [...args, ...arys]
    var s = thisArg.fn(...failArgs)
    delete thisArg.fn
    // 4. 返回
    return s
  }
    return proxFn
}


function foo() {
  console.log('foo被执行了:', this)
}

function bar(num1, num2) {
  console.log('bar被执行了:', this, num1, num2)
}

//  系统执行
var b = foo.bind('aaa')
b()
// 自己执行
var c = foo.yrBind('ccc')
c()
var d = bar.yrBind('ddd', 10, 20)
d()