const obj = {
  "name": "bob",
  "age": 18,
  "friends": {
    "name": "mary",
    "age": 20
  },
  "hobbies": [ "篮球", "电影" ]
}
// 将obj转成JSON格式的字符串
const jsonStr = JSON.stringify(obj)
console.log(jsonStr)

// 将对象数据存储localStorage

localStorage.setItem('obj', jsonStr)

console.log(localStorage.getItem('obj'))

// 将JSON格式的字符串转回对象
const info = JSON.parse(jsonStr)
console.log(info)