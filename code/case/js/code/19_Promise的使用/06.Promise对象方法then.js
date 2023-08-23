// Prmise 对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

const promise = new Promise((resolve, reject) => {
    resolve('aaa')
})

// 1.同一个Promise可以被多次调用then方法
// 当我们的resolve方法被回调时, 所有的then方法传入的回调函数都会被调用
// promise.then(res => {
//     console.log('res1', res)
// })
// promise.then(res => {
//     console.log('res2', res)
// })
// promise.then(res => {
//     console.log('res3', res)
// })

//  2.then方法传入的 "回调函数: 可以有返回值
// then方法本身也是有返回值的, 它的返回值是Promise

// 1> 如果我们返回的是一个普通值(数值/字符串/普通对象/undefined), 那么这个普通的值被作为一个新的Promise的resolve值
// promise.then(res => {
//     return 'bbb'
// }).then(res => {
//     console.log('res4', res)
// })

// 2> 如果我们返回的是一个Promise
// promise.then(res => {
//     return new Promise((resolve, reject) => {
//         resolve('ccc')
//     })
// }).then(res => {
//     console.log('res5', res)
// })

// 3> 如果返回的是一个对象, 并且该对象实现了thenable
promise.then(res => {
    return new Object({
        then(resolve, reject) {
            resolve('ddd')
        }
    })
}).then(res => {
    console.log('res6', res)
})