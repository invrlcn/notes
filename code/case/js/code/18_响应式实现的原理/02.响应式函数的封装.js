// 封装响应式函数
const reactiveFns = []

function watchFn(fn) {
  reactiveFns.push(fn)
}

// 对象响应式
const obj = {
  name: 'bob',
  age: 18
}

watchFn(function() {
  const newName = obj.name
  console.log('hello, world')
  console.log(obj.name)
})

watchFn(function() {
  console.log(obj.name, "demo function -------")
})

function bar() {
  console.log('普通的其他函数')
  console.log('这个函数不需要有任何响应式')
}
obj.name = 'mary'
reactiveFns.forEach(fn => {
  fn()
})

