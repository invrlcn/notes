// 数组解构
var arr = new Array(10, 20, 30)
var [item1, item2, item3] = arr
// 解构后两个
var [, , item4] = arr
// 默认赋值
var [item1, item2, item3, item5 = 50] = arr
// 解构出一个元素,后面的元素放到一个新数组中
var [item1, ...item2] = arr
// console.log(item1, item2, item3)
// console.log(item4)
// console.log(item1, item2, item3, item5)
// console.log(item1, item2)
// 对象解构
var obj = {
  name: 'mary',
  age: 18,
  height: 1.88
}
var {name, age, height} = obj
var {name: newName, ...args} = obj
var {name, age, height, address = '北京市'} = obj
console.log(name, age, height)
console.log(newName, args)
console.log(name, age, height, address)