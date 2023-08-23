// Map 常见的属性
const obj1 = {name: 'yr'}
const obj2 = {age: 18}
const map = new Map()
map.set(obj1, 'abc')
// size：返回Map中元素的个数；
console.log(map.size)
// Map常见的方法：
// set(key, value)：在Map中添加key、value，并且返回整个Map对象；
map.set('height', 1.99)
console.log(map)
// get(key)：根据key获取Map中的value； 
console.log(map.get(obj1))
// has(key)：判断是否包括某一个key，返回Boolean类型；
console.log(map.has('height'))
// delete(key)：根据key删除一个键值对，返回Boolean类型；
console.log(map.delete('height'))
// clear()：清空所有的元素；
// map.clear()
// console.log(map)
// forEach(callback, [, thisArg])：通过forEach遍历Map
map.forEach(i => console.log(i))
// Map也可以通过for of进行遍历
for(const i of map) {
  console.log(i)
}