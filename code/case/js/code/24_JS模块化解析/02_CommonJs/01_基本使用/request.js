const name = 'bob'
const age = 18

function sum(num1, num2) {
  return num1 + num2
}

// 导出方案一：module.exports
// module.exports = {
//   name,
//   age,
//   sum
// }

// 导出方案二: exports
exports.name = name
exports.age = age
exports.sum = sum

// 内部源码
// module.exports = {}
// exports = module.exports

// 这种代码不会进行导出
// exports = {
//   name,
//   age,
//   sum
// }

// 最终能导出的一定是module.exports