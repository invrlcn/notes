// 检测是否是对象函数
function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'function' || valueType === 'object')
}

function deepClone(originValue) {
  // 判断传入的originValue是否是一个对象类型
  if(!isObject(originValue)) {
    return originValue
  } 

  const newObject = {}
  for(const key in originValue) {
    newObject[key] = deepClone(originValue[key])
  }
  return newObject
}

const obj = {
  name: 'lcn',
  age: 18,
  friends: {
    name: 'bob'
  }
}

const newObj = deepClone(obj)
obj.name = 'mary'
obj.friends.name = 'tom'
console.log(newObj)
console.log(newObj === obj)