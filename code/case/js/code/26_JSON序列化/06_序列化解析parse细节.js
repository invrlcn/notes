const jsonStr = '{"name": "bob", "age": 18, "friends": { "name": "mary", "age": 20 }, "hobbies": [ "篮球", "电影" ]}'
const info = JSON.parse(jsonStr, (key, value) => {
  if(key === 'age') {
    return value + 1
  }
  return value
})
console.log(info)