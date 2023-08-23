const obj = {
  name: 'bob',
  age: 18
}

const objProxy = new Proxy(obj, {
  get(target, key) {
    console.log(`监听到对象的${key}属性被访问了`, target)
    return target[key]
  },
  set(target, key, newValue) {
    console.log(`监听到对象的${key}属性被设置了`, target)
    return target[key] = newValue
  }
})
console.log(objProxy.name)
console.log(objProxy.age)
objProxy.name = 'mary'
objProxy.age = 20