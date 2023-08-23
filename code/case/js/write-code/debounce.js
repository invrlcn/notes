// debounce
function cnDebounce(fn, delay, immediate = false) {
  // 1.用于记录上一次事件触发的timer
  let timer = null
  let isInvoke = false

  // 2.触发事件时执行的函数
  const _debounce = (...args) => {
    // 返回值
    return new Promise((resolve, reject) => {
      try {
        // 2.1.如果有再次触发(更多次触发)事件, 那么取消上一次的事件
        if (timer) clearTimeout(timer)

        // 第一次立即执行(第一次操作不需要延迟)
        if (immediate && !isInvoke) {
          const res = fn.call(this, ...args)
          resolve(res)
          timer = null
          isInvoke = true
        }

        // 2.2.延迟去执行对应的fn函数(传入的回调函数)
        timer = setTimeout(() => {
          const res = fn.call(this, ...args)
          resolve(res)
          timer = null // 执行过函数之后, 将timer重新置null
          isInvoke = true
        }, delay)
      } catch (error) {
        reject(error)
      }
    })
  }

  // 取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
  }
  return _debounce
}
