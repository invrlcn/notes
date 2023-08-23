const promise = new Promise((resolve, reject) => {
    // resolve('success')
    reject('fail')
    // throw new Error('rejected start')
})

//  1.当executor抛出异常时, 也是会调用错误(拒绝)捕获的回调函数的
// promise.then(undefined, err => {
//     console.log(err)
// })
// promise.then(undefined).catch(err => {
//     console.log(err)
// })
// console.log('------')

// 2.通过catch方法来传入错误(拒绝)捕获的回调函数
// promise.catch(err => {
//     console.log('err', err)
// })