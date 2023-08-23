const obj = {
  "name": "bob",
  "age": 18,
  "friends": {
    "name": "mary",
    "age": 20
  },
  "hobbies": [ "篮球", "电影" ]
}

// 需求: 将上面的对象转成JSON字符串
// 1.直接转化
const jsonStr1 = JSON.stringify(obj)
console.log(jsonStr1)

// 2.stringify第二个参数replacer
// 2.1. 传入数组: 设定哪些是需要转换
const jsonStr2 = JSON.stringify(obj, ['name', 'friends'])
console.log(jsonStr2)

// 2.2. 传入回调函数:
const jsonStr3 = JSON.stringify(obj, (key, value) => {
  if(key === 'age') {
    return value + 1
  }
  return value
})
console.log(jsonStr3)

// 3.stringify第三参数 space
const jsonStr4 = JSON.stringify(obj, null, '-----')
console.log(jsonStr4)