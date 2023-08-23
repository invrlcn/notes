/*
  纯函数：
  1. 函数在相同的输入值时，产生相同的输出
  2. 函数除了输入和输出值外，和其他隐藏信息状态无关，也和由I/O设备产生的外部影响无关
  3. 函数没有语义上可观的“副作用”，如：“触发事件”等
*/
var arr = [10, 20, 30, 40, 50]
// slice()  纯函数 返回新数组，对原来的数组没有改变
var newArr = []
newArr.push(arr.slice(1, 3))
console.log(newArr)
console.log(arr)

// splice()  非纯函数 会对原数组进行改变
var newArr1 = []
newArr1.push(arr.splice(2))
console.log(newArr1)
console.log(arr)
