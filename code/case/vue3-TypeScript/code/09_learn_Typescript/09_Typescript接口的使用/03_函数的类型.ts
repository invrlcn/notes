// 类型别名type定义函数
// type Foo = (n1: number, n2: number) => number

// const add: Foo = (n1: number, n2: number) => {
//   return n1 + n2
// }

// interface定义函数

interface Foo {
  (n1: number, n2: number): number
}

function calc(num1: number, num2: number, fn: Foo) {
  return fn(num1, num2)
}

const add: Foo = (num1, num2) => {
  return num1 + num2
}
console.log(calc(10, 20, add))
