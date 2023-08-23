// 检测是否是对象函数
function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'function' || valueType === 'object')
}

function deepClone(originValue, map = new WeakMap()) {
  // 判断传入的originValue是否是一个对象类型
  if(!isObject(originValue)) {
    return originValue
  } 

  if(map.has(originValue)) {
    return map.get(originValue)
  }

  // 判断如果是函数类型, 那么直接使用同一个函数
  if(typeof originValue === 'function') {
    return originValue
  }

  // 判断如果是Symbol的value, 那么创建一个新的Symbol
  if(typeof originValue === 'symbol') {
    return Symbol(originValue.description)
  }

  // 判断是否是一个Set类型
  if(originValue instanceof Set) {
    return new Set([...originValue])
  }

  // 判断是否是一个Map类型
  if(originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 判断传入的对象是数组, 还是对象
  const newObject = Array.isArray(originValue) ? [] : {}
  map.set(originValue, newObject)
  for(const key in originValue) {
    newObject[key] = deepClone(originValue[key], map)
  }

  // 对Symbol的key进行特殊的处理
  const sybols =Object.getOwnPropertySymbols(originValue)
  for(const key of sybols) {
    newObject[key] = deepClone(originValue[key], map)
  }
  return newObject
}
const s1 = Symbol('ads')
const s2 = Symbol('gfd')
const obj = {
  name: 'lcn',
  age: 18,
  friends: {
    name: 'bob'
  },
  // 函数类型
  foo: function() {},
  // 数组类型
  arr: ['aaa', 'bbb', 'ccc'],
  // Symbol作为key和value
  [s1]: 'abc',
  s2: s2,
  // Set/Map
  set: new Set(['qqq', 'wwww', 'eee']),
  map: new Map([['sss', 'dddd'], ['rrr', 'ooo']])
}

obj.inner = obj

const newObj = deepClone(obj)
obj.name = 'mary'
obj.friends.name = 'tom'
console.log(newObj)
console.log(obj)
console.log(newObj.info)