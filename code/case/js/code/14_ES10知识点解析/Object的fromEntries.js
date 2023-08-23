/*
  在前面，我们可以通过 Object.entries 将一个对象转换成 entries，那么如果我们有一个entries了，如何将其转换成对象呢？
  ES10提供了 Object.formEntries来完成转换
*/

const obj = {
  name: 'bob',
  age: 18,
  height: 1.88
}
const rest1 = Object.entries(obj)
const rest2 = Object.fromEntries(rest1)
console.log(rest1, rest2)