const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 封装工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (err) {
    reject(err)
  }
}
// 类实现
class CNPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = value => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
        })
      }
    }
    const reject = reason => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      onFulfilled ||
      (value => {
        return value
      })
    onRejected =
      onRejected ||
      (err => {
        throw err
      })
    return new CNPromise((resolve, reject) => {
      // 1.如果在then调用的时候, 状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      }

      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }

      // 2.将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled)
          this.onFulfilledFns.push(() => {
            execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
          })
        if (onRejected)
          this.onRejectedFns.push(() => {
            execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
          })
      }
    })
  }
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }
  finally(onFinally) {
    this.then(
      () => {
        onFinally()
      },
      () => {
        onFinally()
      }
    )
  }
  static resolve(value) {
    return new CNPromise(resolve => resolve(value))
  }
  static reject(reason) {
    return new CNPromise((resolve, reject) => reject(reason))
  }
  static all(promises) {
    // 问题关键: 什么时候要执行resolve, 什么时候要执行reject
    return new CNPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then(
          res => {
            values.push(res)
            if (values.length === promises.length) {
              resolve(values)
            }
          },
          err => {
            reject(err)
          }
        )
      })
    })
  }
  static allSettled(promises) {
    return new CNPromise(resolve => {
      const results = []
      promises.forEach(promise => {
        promise.then(
          res => {
            results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
            if (results.length === promises.length) {
              resolve(results)
            }
          },
          err => {
            results.push({ status: PROMISE_STATUS_REJECTED, reason: err })
            if (results.length === promises.length) {
              resolve(results)
            }
          }
        )
      })
    })
  }
}
const p1 = new CNPromise(resolve => {
  setTimeout(() => {
    resolve(1111)
  }, 1000)
})
const p2 = new CNPromise((resolve, reject) => {
  setTimeout(() => {
    reject(2222)
  }, 2000)
})
const p3 = new CNPromise(resolve => {
  setTimeout(() => {
    resolve(3333)
  }, 3000)
})
// CNPromise.all([p1, p2, p3])
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })
CNPromise.allSettled([p1, p2, p3]).then(res => {
  console.log(res)
})
