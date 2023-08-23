// any方法是ES12中新增的方法，和race方法是类似的：
// any方法会等到一个fulfilled状态，才会决定新Promise的状态；
// 如果所有的Promise都是reject的，那么也会等到所有的Promise都变成rejected状态
// 如果所有的Promise都是reject的，那么会报一个AggregateError的错误


// 创建多个promise
const promise1 = new Promise((resolve, reject) => {
  // resolve('aaaa')
  reject('aaaa')
})
const promise2 = new Promise((resolve, reject) => {
  // resolve('bbbb')
  reject('bbbb')
})
const promise3 = new Promise((resolve, reject) => {
  // resolve('cccc')
  reject('cccc')
})

// any()
Promise.any([promise1, promise2, promise3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})