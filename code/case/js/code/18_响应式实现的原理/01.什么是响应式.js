// m有一个初始化的值，有一段代码使用了这个值；
// 那么在m有一个新的值时，这段代码可以自动重新执行；
// 上面的这样一种可以自动响应数据变量的代码机制，我们就称之为是响应式的
// let m = 100

// // 一段代码
// console.log(m)
// console.log(m * 2)
// console.log(m ** 2)
// console.log("Hello World")

// m = 200

// 对象的响应式
const obj = {
  name: "bob",
  age: 18
}

const newName = obj.name
console.log("你好啊, 李银河")
console.log("Hello World")
console.log(obj.name) 

obj.name = "mary"