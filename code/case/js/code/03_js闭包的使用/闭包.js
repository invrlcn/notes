/*
  一个函数以及其所能访问到的外部的自由变量的组合体可以称为闭包
*/
function foo() {
  var age = 18
  function bar() {
    console.log('bar', age)
  }
  return bar
}

var res = foo()
res()
bar = null  // null:0x0