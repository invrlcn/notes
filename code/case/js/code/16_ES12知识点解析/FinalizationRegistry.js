/*
  FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调。 
  FinalizationRegistry 提供了这样的一种方法：当一个在注册表中注册的对象被回收时，请求在某个时间点上调用一个清理回调。
  （清理回调有时被称为 finalizer ）;
  你可以通过调用register方法，注册任何你想要清理回调的对象，传入该对象和所含的值;
*/ 

let obj = { name: 'bob' }
const ret = new FinalizationRegistry(value => {
  console.log('对象被销毁了', value)
})
ret.register(obj, 'obj')
obj = null