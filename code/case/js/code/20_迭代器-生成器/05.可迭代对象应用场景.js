// 1. for...of

// 2.展开语法(spread syntax)
const iteratorObj = {
  names: ["abc", "cba", "nba"],
  [Symbol.iterator]() {
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
// const iterator = iteratorObj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
const arr = [12, 23, 34]
const reason = [...arr, ...iteratorObj]
console.log(reason)
const obj = {
  name: 'bob',
  age: 18
}
// console.log(obj[Symbol.iterator])
// ES9(ES2018)中新增的一个特性: 用的不是迭代器
const res =  {...obj} 
console.log(res)

// 3.解构语法
const [ name1, name2, name3 ] = arr
console.log(name1, name2, name3)

const { name, age } = obj  // // ES9(ES2018)中新增的一个特性: 用的不是迭代器
console.log(name, age)

// 4.创建一些其他对象时
const set1 = new Set(iteratorObj)
console.log(set1[Symbol.iterator])
const set2 = new Set(arr)
console.log(set2[Symbol.iterator])

// 5.Promise.all
Promise.all(iteratorObj).then(res => {
  console.log(res)
})