// 截取数组

const arr = [123, 345, 567, 789]

const res1 = arr.slice(1, 3)
// console.log(arr)
// console.log(res1)

const res2 = arr.splice(1, 3)

// console.log(arr)
// console.log(res2)

// slice(): 纯函数
// splice(): 非纯函数
