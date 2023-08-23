function foo(name, age) {
  console.log(this, name, age)
}

Function.prototype.cnCall = function (thisArg, ...args) {
  thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg)
  const fn = Symbol()
  thisArg[fn] = this
  thisArg[fn](...args)
  delete thisArg[fn]
}

foo.cnCall(null, 'bob', 18)
