// 常见的方法
const set = new Set()
set.add(10)
set.add(20)
set.add(30)
set.add(40)
// 1. size 返回Set元素的个数
// console.log(set.size)
// 2. add(value)：添加某个元素，返回Set对象本身
set.add(50)
// console.log(set)
// 3. delete(value)：从set中删除和这个值相等的元素，返回boolean类型
set.delete(10)
// console.log(set)
// 4. has(value)：判断set中是否存在某个元素，返回boolean类型
// console.log(set.has(20))
// 5. clear()：清空set中所有的元素，没有返回值
// set.clear()
// console.log(set)
// 6. forEach(callback, [, thisArg])：通过forEach遍历set
// set.forEach(item => console.log(item))

// Set是支持for of的遍历的
for(const i of set) {
  // console.log(i)
}

// Set去重
const arr = [10, 20, 30, 40, 20, 30]
// 普通去重
// const newArr = []
// for(const item of arr) {
//   if(arr.indexOf(item) !== -1) {
//     console.log(item)
//     newArr.push(item)
//   }
// }
// console.log(newArr)