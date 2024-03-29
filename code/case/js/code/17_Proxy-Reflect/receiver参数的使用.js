const obj = {
  _name: 'bob',
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  } 
}
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // receiver是创建出来的代理对象
    console.log('get方法被执行了----', key, receiver)
    console.log(receiver === objProxy)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, newValue, receiver) {
    console.log('set方法被执行了---', key)
    Reflect.set(target, key, newValue, receiver)
  }
})
console.log(objProxy.name)
objProxy.name = 'mary'