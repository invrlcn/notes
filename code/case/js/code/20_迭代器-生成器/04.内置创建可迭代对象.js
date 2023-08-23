const names = ["abc", "cba", "nba"]
// console.log(names[Symbol.iterator])
const iterator1 = names[Symbol.iterator]()
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())

for(const i of names) {
  console.log(i)
} 

// Set/Map
const set = new Set()
set.add(10)
set.add(20)
set.add(30)
console.log(set[Symbol.iterator])
const iterator2 = set[Symbol.iterator]()
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())

const map = new Map()
map.set('name', 'bob')
map.set('age', 18)
map.set('address', '北京')
console.log(map[Symbol.iterator])
const iterator3 = map[Symbol.iterator]()
console.log(iterator3.next())
console.log(iterator3.next())
console.log(iterator3.next())

// 函数中arguments也是一个可迭代对象
function foo(x, y, z) {
  console.log(arguments[Symbol.iterator])
  for(const i of arguments) {
    console.log(i)
  }
}
foo(10, 20, 30)