// iterator
// const arr = ['abc', 'cba', 'nba', 'bba']
// console.log(arr[1])
// for (const a of arr) {
//   console.log(a)
// }

const obj = {
  name: 'bob',
  age: 18,
  address: '杭州市',
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < Object.keys(this).length) {
          return { done: false, value: Object.values(this)[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}
const objIterator = obj[Symbol.iterator]()
// console.log(objIterator.next())
// console.log(objIterator.next())
// console.log(objIterator.next())
// console.log(objIterator.next())

class Animal {
  constructor(name, age, address) {
    this.name = name
    this.age = age
    this.address = address
  }
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
const a = new Animal('dog', 3, 'sh')
for (const i of a) {
  // console.log(i)
}

// generator
// function* generator(n1) {
//   const n2 = yield 11 + n1
//   const n3 = yield 22 + n2
//   const n4 = yield 33 + n3
//   console.log(n4)
// }
// const g = generator('aa')
// console.log(g.next())
// console.log(g.next('bb'))
// g.return()
// console.log(g.next('cc'))
// console.log(g.next('dd'))

const arr = ['abc', 'cba', 'nba', 'bba']
function* generator(arr) {
  // for (const i of arr) {
  //   yield i
  // }
  yield* arr
}
const gen = generator(arr)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
