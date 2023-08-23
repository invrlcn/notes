// 在ES8中，我们允许在函数定义和调用时多加一个逗号
function foo(a, b,) { 
  console.log(a + b)
}
foo(10, 20,)