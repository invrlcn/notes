function cnThrottle(fn, interval, { leading = true, trailing = false } = {}) {
  let startTime = 0
  let timer = null
  const _throttle = function (...args) {
    // 返回值
    return new Promise((resolve, reject) => {
      try {
        // 1. 获取当前时间
        let nowTime = new Date().getTime()

        // 对立即执行函数进行控制
        if (!leading && startTime === 0) {
          startTime = nowTime
        }

        // 2. 计算需要等待执行的时间
        const waitTime = interval - (nowTime - startTime)
        if (timer) clearTimeout(timer)
        if (waitTime <= 0) {
          const res = fn.apply(this, args)
          resolve(res)
          startTime = nowTime
          timer = null
          return
        }

        // 是否进行尾部执行
        if (trailing && !timer) {
          timer = setTimeout(() => {
            const res = fn.apply(this, args)
            resolve(res)
            startTime = new Date().getTime()
            timer = null
          }, waitTime)
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  // 取消功能
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer)
    startTime = 0
    timer = null
  }
  return _throttle
}
