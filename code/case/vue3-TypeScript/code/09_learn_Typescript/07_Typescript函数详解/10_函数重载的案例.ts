/*
  求字符串或者数组的长度
*/

// 方式一： 联合类型

// function getLength(args: string | any[]) {
//   return args.length
// }

// 方式二： 函数重载
function getLength(args: string): number
function getLength(args: any[]): number

function getLength(args: any) {
  return args.length
}
console.log(getLength('abc'))
console.log(getLength([123, 123, 34, 435, 34]))
console.log(getLength(['123', '123', 34, 435, 34]))