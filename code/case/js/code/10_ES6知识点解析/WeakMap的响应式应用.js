const obj1 = {
  name: 'bob',
  age: 18,
}
const obj2 = {
  name: 'tom',
  age: 20,
}
function obj1Name() {
  console.log('obj1Name执行')
}
function obj1Age() {
  console.log('obj1Age执行')
}
function obj2Name() {
  console.log('obj2Name执行')
}
function obj2Age() {
  console.log('obj2Age执行')
}

// 当obj1中name发生改变，执行obj1Name函数，当obj1中age发生改变，执行obj1Age函数
// 当obj2中name发生改变，执行obj2Name函数，当obj2中age发生改变，执行obj2Age函数

// 1.创建weakMap对象(弱应用，可以被GC回收)
const weakMap = new WeakMap()
// 2.收集依赖结构
// 2.1 对obj1收集的数据结构
const obj1Map = new Map()
obj1Map.set('name', [obj1Name])
obj1Map.set('age', [obj1Age])
weakMap.set(obj1, obj1Map)
// 2.2 对obj2收集的数据结构
const obj2Map = new Map()
obj2Map.set('name', [obj2Name])
obj2Map.set('age', [obj2Age])
weakMap.set(obj2, obj2Map)
// 3. 改变属性执行对应的函数
obj1.name = 'invr'
const targetMap1 = weakMap.get(obj1)
const fns1 = targetMap1.get('name')
fns1.forEach(item => item())

obj2.age = 30
const targetMap2 = weakMap.get(obj2)
const fns2 = targetMap2.get('age')
fns2.forEach(item => item())
