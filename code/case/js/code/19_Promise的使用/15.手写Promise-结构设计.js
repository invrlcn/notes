const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 类实现
// class CNPromise {
//   constructor(executor) {
//     this.status = PROMISE_STATUS_PENDING
//     this.value = undefined
//     this.reason = undefined

//     const resolve = value => {
//       if (this.status === PROMISE_STATUS_PENDING) {
//         this.status = PROMISE_STATUS_FULFILLED
//         this.value = value
//         console.log('resolve被调用', this.value)
//       }
//     }
//     const reject = reason => {
//       if (this.status === PROMISE_STATUS_PENDING) {
//         this.status = PROMISE_STATUS_REJECTED
//         this.reason = reason
//         console.log('reject被调用', this.reason)
//       }
//     }

//     executor(resolve, reject)
//   }
// }

// 构造函数实现
function CNPromise(executor) {
  this.status = PROMISE_STATUS_PENDING
  this.value = undefined
  this.reason = undefined

  const resolve = value => {
    if (this.status === PROMISE_STATUS_PENDING) {
      this.status = PROMISE_STATUS_FULFILLED
      this.value = value
      console.log('resolve被调用', this.value)
    }
  }

  const reject = reason => {
    if (this.status === PROMISE_STATUS_PENDING) {
      this.status = PROMISE_STATUS_REJECTED
      this.reason = reason
      console.log('reject被调用', this.reason)
    }
  }
  executor(resolve, reject)
}

const p = new CNPromise((resolve, reject) => {
  resolve(11)
  reject(22)
})
