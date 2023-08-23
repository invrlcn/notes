const name = 'yr'
const age = 18
const height = 1.88

console.log(`my name is ${name}, my age is ${age}, height is ${height}`)

function foo() {
  return 'my function is foo'
}
console.log(`${foo()}`)

// 标签模板字符串使用
function bar(...args) {
  console.log(args)
}
// 对字符串模板进行分割，分割部分会组成第一个参数维数组，后面的参数是字符串模板的传进去的值
bar`hello ${name} world ${age}`   // [ [ 'hello ', ' world ', '' ], 'yr', 18 ]