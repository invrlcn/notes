// unknown 用于描述类型不确定的变量

function foo() {
  return 'abc'
}

function bar() {
  return 123
}

// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型

let flag = false
let res: unknown         // 最好不要使用any
if(flag) {
  res = 'hello'
} else {
  res = 213
}

console.log(res)

export {}