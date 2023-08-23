// flat: 按照一个可指定的深度递归遍历数组,将遍历到的选项组合返回新数组
const arr = [123, 234, [444, 555, 666, [777, 888, 999]]]
// const res1 = arr.flat(1)
// const res2 = arr.flat(2)
// console.log(arr)  // [123, 234, [444, 555, 666, [777, 888, 999]]]
// console.log(res1) //[ 123, 234, 444, 555, 666, [ 777, 888, 999 ] ]
// console.log(res2) //[ 123, 234, 444, 555, 666,  777, 888, 999  ]

// flatMap: flat和map组合 先进行map操作再进行flat操作
// const res = arr
//   .map(
//     function (i) {
//       console.log(this)
//       return i * 10
//     },
//     { name: 'bob' }
//   )
//   .flat(2)
// const res = arr.flatMap(i => {
//   console.log(i * 10)
// })
// console.log(res)

const ary = [123, 323, 434, 545]
// ary.map(function (i, index, arr) {
//   console.log(i, index, arr)
//   console.log(this, '-----------')
// }, 'aaa')

const obj = {
  name: 'bob',
  age: 18,
  address: 'hz',
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < Object.keys(this).length) {
          return { done: false, value: Object.values(this)[index++] }
        } else {
          return { done: true }
        }
      }
    }
  }
}

// for (const i of ary) {
//   console.log(i)
// }
// for (const i in ary) {
//   console.log(i)
// }
for (const i in obj) {
  console.log(i)
  // console.log(obj[i])
}
for (const i of obj) {
  console.log(i)
}
