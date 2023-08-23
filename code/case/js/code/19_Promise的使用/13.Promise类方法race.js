// 如果有一个Promise有了结果，我们就希望决定最终新Promise的状态，那么可以使用race方法：
// race是竞技、竞赛的意思，表示多个Promise相互竞争，谁先有结果，那么就使用谁的结果；

// 创建多个promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('aaaa')
    reject('aaaa')
  }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('bbbb')
    reject('bbbb')
  }, 500)
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('cccc')
    reject('cccc')
  }, 500)
})

// race()
Promise.race([promise1, promise3, promise2]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})