/*
  柯里化： 函数式编程概念
  把接受多个参数的函数，变成接受一个单一的参数，并且返回接受剩余参数的新函数的一种技术
  即： 值传递给函数一部分的参数来调用，让它返回一个函数调用剩余的参数的这样一个过程称为柯里化
*/

// 普通函数
// function foo(a, b, c, d) {
//   console.log(a + b + c + d)
// }

// 函数柯里化
  function foo(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          console.log(a + b + c + d)
        }
      }
    }
  }

// 简写
var foo = a => b => c => d => console.log(a + b + c + d)
foo(10)(20)(30)(40)
