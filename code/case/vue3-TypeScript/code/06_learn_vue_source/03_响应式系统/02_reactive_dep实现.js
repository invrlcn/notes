class Dep {
  constructor() {
    // 订阅
    this.subscribers = new Set()
  }
  
  // 作用
  addEffect(effect) {
    this.subscribers.add(effect)
  }

  // 通告
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

const dep = new Dep()

const obj = { name: 'lcn', age: 20 }

// 执行代码
function double() {
  console.log(obj.name, obj.age * 2)
}

dep.addEffect(double)
dep.notify()

obj.name = 'bob'
dep.notify()