/**
 * resolve(参数)
 *  1> 普通的值或者对象  pending -> fulfilled
 *  2> 传入一个Promise
 *    那么当前的Promise的状态会由传入的Promise来决定
 *    相当于状态进行了移交
 *  3> 传入一个对象, 并且这个对象有实现then方法(并且这个对象是实现了thenable接口)
 *    那么也会执行该then方法, 并且又该then方法决定后续状态
 */

// 1、普通参数
// new Promise((resolve, reject) => {
//   resolve(111)
//   reject(222)
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// Promise
// const newPromise = new Promise((resolve, reject) => {
//   // resolve('aaa')
//   reject('bbb')
// })
// new Promise((resolve, reject) => {
//   resolve(newPromise)
//   reject(newPromise)
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

//对象且有then方法
new Promise((resolve, reject) => {
  const obj = {
    then(resolve, reject) {
      // resolve('ccc')
      reject('ddd')
    }
  }
  resolve(obj)   // then()  => resolve()
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})