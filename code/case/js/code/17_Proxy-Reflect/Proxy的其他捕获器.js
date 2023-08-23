const obj = {
  name: "bob", // 数据属性描述符
  age: 18
}
// 变成一个访问属性描述符
// Object.defineProperty(obj, "name", {

// })

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get(target, key) {
    console.log(`监听到对象的${key}属性被访问了`, target)
    return target[key]
  },
  // 设置值时的捕获器
  set(target, key, value) {
    console.log(`监听到对象的${key}属性被设置了`, target)
    return target[key] = value
  },
  // 监听in的捕获器
  has(target, key) {
    console.log(`监听到对象的${key}属性in操作`, target)
    return key in target
  },
  // 监听delete的捕获器
  deleteProperty(target, key) {
    console.log(`监听到对象的${key}属性delete操作`, target)
    return delete target[key]
  }
})

console.log(objProxy.name, objProxy.age)
objProxy.name = 'mary'
objProxy.age = 29
// in
'name' in objProxy
// delete
delete objProxy.age