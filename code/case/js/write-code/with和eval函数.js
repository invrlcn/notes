// with(): 有自己的作用域

const obj = {
  name: 'bob',
  age: 19
}

with (obj) {
  console.log(name)
  console.log(age)
}

// eval(): 将字符串当做js代码执行, 最后一段代码作为输出内容
const str = `const msg = 'hello, world'; console.log(msg)`
eval(str)
