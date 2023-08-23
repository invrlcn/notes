// 监听对象操作
const obj = {
  name: 'bob',
  age: 18
}

// Object.definePrototype()
Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    configurable: false,
    enumerable: false,
    set(newValue) {
      // console.log(`设置新属性:${newValue}`)
      value = newValue
    },
    get() {
      // console.log(`获取到属性${value}`)
      return value
    }
  })
})
// obj.name
// obj.name = 'tom'
// obj.age
// obj.age = 20

// proxy
// const proxy = new Proxy(obj, {
//   set(target, property, newValue, receiver) {
//     console.log(`设置新属性${newValue}`)
//     target[property] = newValue
//   },
//   get(target, property, receiver) {
//     console.log(`获取到属性${target[property]}`)
//     return target[property]
//   },
//   has(target, property) {
//     // console.log(property)
//     return property in target
//   }
// })

// proxy.name
// proxy.name = 'tom'
// proxy.age
// proxy.age = 30
// console.log('name' in proxy)

const proxy = new Proxy(obj, {
  set(target, property, newValue, receiver) {
    console.log(`设置新属性${newValue}`)
    Reflect.set(target, property, newValue, receiver)
  },
  get(target, property, receiver) {
    console.log(`获取到属性${target[property]}`)
    return Reflect.get(target, property, receiver)
  },
  has(target, property) {
    // console.log(property)
    return Reflect.has(target, property)
  }
})
proxy.name
proxy.name = 'tom'
proxy.age
proxy.age = 30
console.log('name' in proxy)
