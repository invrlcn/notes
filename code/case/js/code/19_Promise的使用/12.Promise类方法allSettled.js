// 该方法会在所有的Promise都有结果（settled），无论是fulfilled，还是reject时，才会有最终的状态；
// 并且这个Promise的结果一定是fulfilled的；

// 创建多个promise
const promise1 = new Promise((resolve, reject) => {
  resolve('aaaa')
  reject('aaaa')
})
const promise2 = new Promise((resolve, reject) => {
  // resolve('bbbb')
  reject('bbbb')
})
const promise3 = new Promise((resolve, reject) => {
  resolve('cccc')
  reject('cccc')
})

// allSettled
Promise.allSettled([promise1, promise2, promise3, 'dddd']).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})