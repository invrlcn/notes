const path = require('path')

const p1 = 'F:\\demo'
const p2 = './abc/cba'
const p3 = '../aaa/bbb.js'

// 获取路径信息
// console.log(path.basename(p1))
// console.log(path.dirname(p2))
// console.log(path.extname(p3))

// join路径拼接
// console.log(path.join(p1, p2))
// console.log(path.join(p2, p3))

// 绝对路径

// console.log(path.resolve(p1, p2))
console.log(path.resolve(p2, p3))
// console.log(path.resolve(p1))
// console.log(path.resolve(p2))
// console.log(path.resolve(p3))
