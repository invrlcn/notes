function foo(name, age, address) {
  console.log(this, name, age, address)
}

Function.prototype.cnBind = function (thisArg, ...args1) {
  thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg)
  return (...args2) => {
    const fn = Symbol()
    thisArg[fn] = this
    thisArg[fn](...args1, ...args2)
  }
}

const f = foo.cnBind(undefined, 'bob', 18)
f('杭州市')
