const obj = {
  "name": "bob",
  "age": 18,
  "friends": {
    "name": "mary",
    "age": 20
  },
  "hobbies": [ "篮球", "电影" ]
}

// 将obj对象的内容放到info变量中
const info = obj
obj.age = 100
// console.log(obj.age)

// 浅拷贝
const obj2=  { ...obj }
obj2.address = '北京'
obj.age = 30
console.log(obj.age, obj2.age)

obj.friends.name = "tom"
// console.log(obj2.friends.name, obj.friends.name)

// 深拷贝(缺点：无法识别undefined、函数等)
const deepClone = JSON.parse(JSON.stringify(obj))
obj.age = 30
console.log(obj.age, deepClone.age)
obj.friends.name = 'lcn'
console.log(obj.friends.name, deepClone.friends.name)