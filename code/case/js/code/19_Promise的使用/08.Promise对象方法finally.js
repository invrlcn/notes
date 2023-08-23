// finally是在ES9（ES2018）中新增的一个特性：表示无论Promise对象无论变成fulfilled还是reject状态，最终都会 被执行的代码。
//finally方法是不接收参数的，因为无论前面是fulfilled状态，还是reject状态，它都会执行
const promise = new Promise((resolve, reject) => {
  reject('fail')
  resolve('success')
})
promise.then(res => {
  console.log('res', res)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log('finally')
})