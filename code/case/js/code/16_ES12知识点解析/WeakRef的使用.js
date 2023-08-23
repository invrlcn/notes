// ES12: WeakRef类
// WeakRef.prototype.deref: 
// > 如果原对象没有销毁, 那么可以获取到原对象
// > 如果原对象已经销毁, 那么获取到的是undefined

let obj = { name: 'bob' }
let info = new WeakRef(obj)
const res = new FinalizationRegistry(value => {
  console.log('对象被销毁了', value)
})
res.register(obj, 'obj')
obj = null

setTimeout(() => {
  console.log(info.deref()?.name)
  console.log(info.deref() && info.deref().name)
}, 10000)