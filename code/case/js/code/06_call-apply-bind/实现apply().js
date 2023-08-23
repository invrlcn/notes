Function.prototype.yrApply = function(thisArg, args) {
  // 1。找到调用的函数
  var fn = this
  // 2.设置thisArg为对象类型
  thisArg =  (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
  // 3.执行
  thisArg.fn = fn
  args = args || []
  var res = thisArg.fn(...args)
  delete thisArg.fn
  // 输出
  return res
}




function foo() {
  console.log('foo被执行:', this)
}
function bar(num1, num2) {
  console.log('bar被执行:', this, num1 * num2)
}
// 系统实现
foo.apply('aaa')
// 自己实现
bar.yrApply('bbb', [20, 30])