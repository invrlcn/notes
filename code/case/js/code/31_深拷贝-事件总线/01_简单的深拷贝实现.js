const s1 = Symbol()
const s2 = Symbol()

const obj = {
  name: 'lcn',
  age: 18,
  friends: {
    name: 'bob'
  },
  [s1]: 'abc',
  s2: s2,
  foo: function() {}
}
obj.inner = obj  // 循环引用

const info = JSON.parse(JSON.stringify(obj)) 
obj.age = 20
obj.friends.name = 'mary'
console.log(obj.friends === info.friends)
console.log(obj)
console.log(info)

// JSON.pase(JSON.stringify())缺点:
// 1.无法识别Symbol()  2. 无法识别function 3. 循环引用会报错