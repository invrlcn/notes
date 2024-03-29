// request.js
function requestData(url) {
  // 异步请求的代码会被放入到executor中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      resolve(url)
    }, 2000)
  })
}

// 需求: 
// 1> url: bob -> res: bob
// 2> url: res + "aaa" -> res: bobaaa
// 3> url: res + "bbb" => res: bobaaabbb

// 1.第一种方案：多次回调/回调地狱
// requestData('bob').then(res => {
//   requestData(res + 'aaa').then(res => {
//     requestData(res + 'bbb').then(res => {
//       console.log('请求成功！', res)
//     })
//   })
// })

// 2.第二种方案:Promise中then的返回值来解决
// requestData('bob').then(res => {
//   return requestData(res + 'aaa')
// }).then(res => {
//   return requestData(res + 'bbb')
// }).then(res => {
//   console.log('请求成功！', res)
// })

// 3.第三种方案Promise + generator实现
// function* getData() {
//   const res1 = yield requestData('bob') 
//   const res2 = yield requestData(res1 + 'aaa')
//   const res3 = yield requestData(res2 + 'bbb')
//   console.log('请求成功！', res3)
// }

// 1> 手动执行生成器函数
// const generator = getData()
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res => {
//       generator.next(res)
//     })
//   })
// })

// 2> 自己封装了一个自动执行的函数:递归
// function execGenerator(fn) {
//   const generator = fn()
//   function exec(res) {
//     const result = generator.next(res)
//     if (result.done) {
//       return result.value
//     }
//     result.value.then(res => {
//       exec(res)
//     })
//   }
//   exec()
// }
// execGenerator(getData)

// 3> 第三方包co自动执行
// TJ: co/n(nvm)/commander(vue cli)/express/koa(egg)
// const co = require('co')
// co(getData)

// 4.第四种方案: async/await

async function getData() {
  const res1 = await requestData('bob')
  const res2 = await requestData(res1 + 'aaa')
  const res3 = await requestData(res2 + 'bbb')
  console.log('请求成功！', res3)
}
getData()