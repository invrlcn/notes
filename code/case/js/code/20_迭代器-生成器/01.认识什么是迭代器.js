// 编写的一个迭代器
const iterator = {
  next: function() {
    return { done: false, value: 'aaa' }
  }
}

// 数组
const names = ["abc", "cba", "nba"]

// 创建一个迭代器对象来访问数组
let index = 0
const iteratorObj = {
  next() {
    if(index < names.length) {
      return { done: false, value: names[index++] } 
    } else {
      return { done: true, value: undefined }
    }
  }
}
console.log(iteratorObj.next())
console.log(iteratorObj.next())
console.log(iteratorObj.next())
console.log(iteratorObj.next())