// request
function foo() {
  return new Promise((resolve, reject) => {
    resolve('success')
    // reject('finally')
  })
}

// Promise
const fooPromise = foo()
// then方法传入的回调函数两个回调函数:
// > 第一个回调函数, 会在Promise执行resolve函数时, 被回调
// > 第二个回调函数, 会在Promise执行reject函数时, 被回调
fooPromise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})

// 传入的这个函数, 被称之为 executor
// > resolve: 回调函数, 在成功时, 回调resolve函数
// >reject: 回调函数, 在失败时, 回调reject函数


// const promise = new Promise((resolve, reject) => {
//   // resolve('success')
//   reject('finally')
// }).then(res => {
//   console.log(res)
// }).catch( err => {
//   console.log(err)
// })