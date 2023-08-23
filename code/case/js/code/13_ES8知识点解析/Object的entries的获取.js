// 通过Object.entries 可以获取到一个数组，数组中会存放可枚举属性的键值对数组。
const obj = {
  name: 'bob',
  age: 18
}
console.log(Object.entries(obj))
const objEntries = Object.entries(obj)
objEntries.forEach(item => {
  console.log(item[0], item[1])
});