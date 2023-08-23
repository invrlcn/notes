// 逻辑或运算符
let msg = ''
msg ||= '默认值'
console.log(msg)

// 逻辑与运算符
let obj = {
  name: 'bob'
}
obj &&= obj.name
console.log(obj)

// 逻辑空运算符
let res = 0
res ??= '默认值'
console.log(res)