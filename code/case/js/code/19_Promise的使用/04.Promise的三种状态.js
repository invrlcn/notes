// const promise = new Promise((resolve, reject) => {
//   resolve()
//   reject()
// })
// promise.then((res) =>{
//   console(res)
// }, (err) => {
//   console(err)
// })

// 完全等价于下面代码
// 注意: Promise状态一旦确定下来, 那么就是不可更改的(锁定)
new Promise((resolve, reject) => {
  // pending状态: 待定/悬而未决的
  resolve(111)  // 处于fulfilled状态(已敲定/兑现状态)
  // reject(222)   // 处于rejected状态(已拒绝状态)
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})