// 改造01中的异步请求
function requestData(url) {
  return new Promise((resolve, reject) => {
    // 模拟请求
    setTimeout(() => {
      if(url === 'bob') {
        const arr = ['abc', 'bca', 'cba']
        resolve('请求成功！', arr)
      } else {
        const reason = 'reject finally'
        reject('请求失败!', reason)
      }
    }, 3000)
  })
}

// main.js
requestData('bob').then((res) => {
  console.log('res', res)
}, (err) => {
  console.log('err', err)
})