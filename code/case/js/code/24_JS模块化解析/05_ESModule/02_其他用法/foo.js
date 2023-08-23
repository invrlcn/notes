// 1.第一种方式: export 声明语句
// export const name = "bob"
// export const age = 18
// export function sum(num1, num2) {
//   return num1 + num2
// }
// export class Person {

// }

// 2.第二种方式: export 导出 和 声明分开
const name = 'mary'
const age = 20
function foo() {
  console.log('foo function')
}
export {
  name,
  age,
  foo
}

// 3.第三种方式: 第二种导出时起别名
// export {
//   name as newName,
//   age as newAge,
//   foo as bar
// }