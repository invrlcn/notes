// 转成Promise 对象
// function foo() {
//   const obj = {name: 'bob'}
//   return new Promise(resolve => {
//     resolve(obj)
//   })
// }
// foo().then(res => {
//   console.log(res)
// })

// const promise1 = Promise.resolve({name: 'bob'})
// promise1.then(res => {
//   console.log(res)
// })
// 等价于
// const promise2 = new Promise(resolve => {
//   resolve({name: 'bob'})
// })
// promise2.then(res => {
//   console.log(res)
// })

// 类方法Promise.resolve
// 1.普通的值
// const promise = Promise.resolve({name: 'bob'})
// console.log(promise)

// 2.传入promise
// const promise = Promise.resolve(new Promise((resolve, reject) => {
//   resolve('aaaa')
// })).then(res => {
//   console.log(res)
// })
// console.log(promise)

// 3.传入thenable对象
const promise = Promise.resolve({
  then(resolve, reject) {
    resolve('bbbb')
  }
}).then(res => {
  console.log(res)
})