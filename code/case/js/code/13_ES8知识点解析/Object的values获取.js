// 之前我们可以通过 Object.keys 获取一个对象所有的key，在ES8中提供了 Object.values 来获取所有的value值
const obj = {
  name: 'bob',
  age: 18
}
console.log(Object.keys(obj))
console.log(Object.values(obj))

console.log(Object.values(['abc', 'cba', 'nba']))
console.log(Object.values('abc'))   // [ 'a', 'b', 'c' ]