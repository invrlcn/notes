// 给所有的函数添加yrCall方法
Function.prototype.yrCall = function(thisArg, ...args) {
  // 执行调用的那个函数（foo）
  // 问题： 得获取到是哪个函数执行了yrCall
  // 1.获取需要被执行的函数
  var fn = this
  // 2.对thisArg转成对象类型（防止传入的是非法对象）
  thisArg = thisArg ? Object(thisArg) : window
  // 3. 调用需要被执行的函数
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn
  // 4.将最终结果返回
  return result
}



function foo() {
  console.log('foo被执行:', this)
}

function bar(sum1, sum2, sum3) {
  console.log('bar被执行:', sum1 + sum2 + sum3)
}
// 系统实现
// foo.call('abc')
// 自己实现
// 默认进行隐式调用
foo.yrCall('aaa')
bar.yrCall('bbb', 10, 20, 30)