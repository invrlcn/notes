/**
 * 这种回调的方式有很多的弊端:
 *  1> 如果是我们自己封装的requestData,那么我们在封装的时候必须要自己设计好callback名称, 并且使用好
 *  2> 如果我们使用的是别人封装的requestData或者一些第三方库, 那么我们必须去看别人的源码或者文档, 才知道它这个函数需要怎么去获取到结果
 */

// request.js
function requestData(url, successFn, finallyFn) {
  // 模拟请求
  setTimeout(() => {
    // 如果传入的url为bob则成功
    if(url === 'bob') {
      const arr = ['abc', 'bca', 'cba']
      successFn(arr)
    } else {
      // 失败
      const reason = 'reject finally'
      finallyFn(reason)
    }
  }, 3000)
}

// main.js
requestData('mary', (res) => {
  console.log(res)
}, (rea) => {
  console.log(rea)
})