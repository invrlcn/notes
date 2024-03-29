// import { name, age, sum } from './foo.js'
// console.log(name, age)
// sum(10, 20)

// import函数返回的结果是一个Promise
import('./foo.js').then(res => {
  console.log(res.name, res.age)
  res.sum(20, 30)
})

console.log("后续的代码都是不会运行的~")

// ES11新增的特性
// meta属性本身也是一个对象: { url: "当前模块所在的路径" }
console.log(import.meta)