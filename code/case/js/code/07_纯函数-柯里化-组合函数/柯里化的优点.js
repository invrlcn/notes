//  单一职责：让函数处理一种事情，剩下的交给其他函数去处理
// function foo(a) {
//   a += 2
//   return function(b) {
//     b *= 2
//     return function(c) {
//       c = c ** 2
//       return (console.log(a + b + c))
//     }
//   }
// }
// foo(2)(2)(2)

// 柯里化的复用
// function makeAdd(num) {
//   return function(count) {
//     return num + count
//   }
// }
// var add5 = makeAdd(5)
// console.log(add5(10))
// console.log(add5(100))

// 柯里化打印日志
// function log(date, type, msg) {
//   console.log(`[${date.getHours()}:${date.getMinutes()} ${type} ${msg}]`)
// }
// log(new Date(), 'DEBUG', '页面bug')

var log = date => type => msg => console.log(`[${date.getHours()}:${date.getMinutes()} ${type} ${msg}]`)

var proxFn = log(new Date())
proxFn('DEBUG')('页面bug')
var proxFn2 = proxFn('DEBUG')
proxFn2('轮播图bug')