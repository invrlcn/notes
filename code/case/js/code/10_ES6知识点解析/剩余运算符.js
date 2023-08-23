function foo(num1, num2, ...args) {
  console.log(args)
  console.log(arguments)
}
foo(10, 20, 30, 40, 50)

// 和arguments的区别： 
// 1.剩余运算符返回的是对应形参之外的剩余的形参, arguments 返回所有的参数
// 2.arguments是一个类数组，有数组的length， 没有数组的方法
