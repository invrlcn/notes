// 在ES11之前，虽然很多浏览器支持for...in来遍历对象类型，但是并没有被ECMA标准化。
// 在ES11中，对其进行了标准化，for...in是用于遍历对象的key的

const obj = {
  name: 'bob',
  age: 18
}
for(const i in obj) {
  console.log(i)
}