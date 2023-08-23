async function foo() {
  console.log('foo start')

  console.log('中间代码')
  
   // 异步函数中的异常, 会被作为异步函数返回的Promise的reject值的
  try {
    throw new Error('error message')
  } catch(err) {
    console.log(err)
  }
  

  console.log('foo end')
}
console.log('后续代码')

foo().then(res => {

}).catch(err => {
  console.log('invrlcn err:', err)
})