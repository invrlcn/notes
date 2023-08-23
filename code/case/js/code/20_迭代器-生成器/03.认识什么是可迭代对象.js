// 创建一个迭代器对象来访问数组

const iteratorObj = {
  names: ["abc", "cba", "nba"],
  [Symbol.iterator]: function() {
    let index = 0
    return {
      next: () => {
        if(index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

// iterableObj对象就是一个可迭代对象
// console.log(iterableObj[Symbol.iterator])

const iterator = iteratorObj[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// for...of可以遍历的东西必须是一个可迭代对象

// const obj = {
//   name: 'bob',
//   age: 18
// }
for(const i of iteratorObj) {
  console.log(i)
} 