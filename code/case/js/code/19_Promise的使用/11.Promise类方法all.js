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

// 需求: 所有的Promise都变成fulfilled时, 再拿到结果
// 意外: 在拿到所有结果之前, 有一个promise变成了rejected, 那么整个promise是rejected
Promise.all([promise1, promise2, promise3, 'dddd']).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})