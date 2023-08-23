function foo(name, age) {
  console.log(this, name, age)
}

Function.prototype.cnApply = function (thisArg, argsArr) {
  thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg)
  const fn = Symbol()
  Object.defineProperty(thisArg, fn, {
    configurable: false,
    enumerable: false,
    writable: false,
    value: this
  })
  thisArg[fn](...argsArr)
  delete thisArg[fn]
}

foo.cnApply(1234, ['bob', 18])
