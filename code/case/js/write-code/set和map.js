// set
// const res = new Set()
// res.add(123)
// res.add('aaa')
// res.add(true)
// res.add({ name: 'bob' })
// res.add(123) // 不能重复
// console.log(res)

// console.log(res.has(123))
// res.forEach(i => {
//   if (res.delete(i)) console.log('success')
// })

// 去重
// const arr = [11, 22, 33, 122, 33, 11, 43, 22]
// const res1 = new Set(arr)
// console.log(res1)

// weakSet
// const obj = { name: 'tom' }
// const info = { age: 18 }
// const res2 = new WeakSet()
// res2.add(obj)
// res2.add(info)
// console.log(res2)
// console.log(res2.has(obj))

// map

// const obj = { name: 'bob' }
// const info = { age: 18 }
// const age = 30
// const res = new Map()
// res.set(obj, 'aaa')
// res.set(info, 'bbb')
// res.set(age, 'ccc')
// console.log(res)

// console.log(res.get(obj))

// res.forEach(k => {
//   console.log(k)
// })
// for(const i of res) {
//   console.log(i)
// }

// weakMap
const info = { age: 18 }
const age = 30
const res = new WeakMap()
res.set(info, 'aaa')
console.log(res)
