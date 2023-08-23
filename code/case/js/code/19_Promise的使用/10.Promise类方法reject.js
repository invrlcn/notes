// const promise1 = Promise.reject({name: 'bob'})
// console.log(promise1)
// 等价于
// const promise2 = new Promise((resolve, reject) => {
//   reject('bob')
// })
// console.log(promise2)

// 注意: 无论传入什么值都是一样的, 都会执行promise.catch()

const promise = Promise.reject(new Promise((resolve, reject)  => {
  reject('aaa')
}))
promise.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})