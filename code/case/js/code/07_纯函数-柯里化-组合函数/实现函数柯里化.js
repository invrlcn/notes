function yrCurry(fn) {
   function curried(...arg1) {
    // 判断当前接受的参数的个数和参数本身接受的参数是否一致
    // 当前已经传入的参数大于等于参数本身时，就执行函数
    if(arg1.length >= fn.length) {
      // return fn.call(this, ...arg)
      return fn.apply(this, arg1)
    } else {
      // 如果没有达到就返回一个新的函数继续执行
      function curried2(...arg2) {
        // 接收到参数后需要递归调用curried函数来检查参数是否达到一致
        return curried.apply(this, arg1.concat(arg2))
      }
      return curried2
    }
  }
  return curried
}
function add(a, b, c) {
  return a + b + c
}
var res = yrCurry(add)
console.log(res(10, 20, 30))
console.log(res(10, 20)(30))
console.log(res(10)(20)(30))