// 创建对象的过程
function createObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

// 将Subtype和Supertype联系在一起
// 寄生式函数
function inherit(subType, Supertype) {
  subType.prototype = createObject(Supertype.prototype)

  // 设置constructor
  Object.defineProperty(subType.prototype, 'constructor', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: subType
  })
}
