function createIteratorArray(arr) {
  let index = 0
  return {
    next: function() {
      if(index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined }
      }
    }
  }
}

const arr1 = ['aaa', 'bbb', 'ccc']
const arr2 = [123, 343, 545]
const arrIterator1 = createIteratorArray(arr1)
const arrIterator2 = createIteratorArray(arr2)
console.log(arrIterator1.next())
console.log(arrIterator1.next())
console.log(arrIterator1.next())
console.log(arrIterator1.next())
console.log(arrIterator2.next())
console.log(arrIterator2.next())
console.log(arrIterator2.next())
console.log(arrIterator2.next())

// // 创建一个无限的迭代器
let index = 0
const iterator = {
  next: function() {
    return {
      done: false,
      value: index++
    }
  }
}
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())