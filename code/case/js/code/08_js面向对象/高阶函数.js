/*
  高阶函数：允许其它函数作为参数或者作为返回值的一类函数称为高阶函数

*/

var nums = [10, 20, 32, 43, 34, 33, 57]
/*
  返回其中的偶数
*/
var resut = [];

 // for循环
// for(var  i = 0; i < nums.length; i++) {
//   var arr = nums[i];
//   if (arr % 2 === 0) {
//     resut.push(arr)
//   }
// }
// console.log(resut)
// 1. filter()   过滤
// resut.push ( nums.filter((item, index, arr) => {
//   return item % 2 === 0
// }))
// console.log(resut)

// 2.map()  映射

// var s = nums.map(item => {
//   return item * 10
// })
// console.log(s)

// 3. foreach()  遍历   没有返回值

// var s = nums.forEach((item, index, arr) => {
//   console.log(item)
// })

// 4. reduce()   累加  两个参数 第一个参数是前一个数，后一个为数组元素，可以设置前一个数
// var s = nums.reduce((per, item) => {
//   return per += item
// }, 0)
// console.log(s)

// find()  查找   findIndex()  查找下标
// var s = nums.find(item === 43)
var s = nums.find(item => item === 43)
var d = nums.findIndex(index => index === 43)
console.log(d)