class Depend {
  constructor() {
    this.receiveFns = []
  }
  addDepend(receiveFn) {
    this.receiveFns.push(receiveFn)
  }
  notify() {
    this.receiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式函数
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
}

// 响应式对象
const obj = {
  name: 'bob',
  age: 18
}

// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target,key, receiver)
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
    depend.notify()
  }
})
watchFn(function() {
  console.log(objProxy.name)
  console.log('响应式触发1')
})

watchFn(function() {
  console.log('响应式触发2')
})

function bar() {
  console.log('没有触发响应式')
}
objProxy.name = 'mary'