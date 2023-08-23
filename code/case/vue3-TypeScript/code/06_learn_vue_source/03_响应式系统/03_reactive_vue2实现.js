class Dep {
  constructor() {
    // 订阅
    this.subscribers = new Set()
  }
  
  depend() {
    if(activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }

  // 通告
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

// Map({key: value}): key是一个字符串
// WeakMap({key(对象): value}): key是一个对象, 弱引用

const targetMap = new WeakMap()
function getDep(target, key) {
  // 1.根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target)
  if(!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  // 2.取出具体的dep对象
  let dep = depsMap.get(key)
  if(!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }
  return dep
}

// vue2对raw进行数据劫持
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    const dep = getDep(raw, key)
    let value = raw[key]

    Object.defineProperty(raw, key, {
      get() {
        dep.depend()
        return value
      },
      set(newValue) {
        if(value !== newValue) {
          value = newValue
          dep.notify()
        }
      }
    })
  })
  
  return raw
}

const obj = { name: 'lcn', age: 20 }

// 执行代码
watchEffect(function double() {
  console.log(obj.name, obj.age * 2)
})
watchEffect(function double() {
  console.log(obj.name = 'bob', obj.age * 2)
})



