function foo() {}

const fooProxy = new Proxy(foo, {
  apply(target, thisArg, arr) {
    console.log('对foo函数进行了apply调用')
    return target.apply(thisArg, arr)
  },
  construct(target, arr, newTarget) {
    console.log('对foo函数进行了construct调用')
    return new target(...arr)
  }
})
fooProxy.apply({}, ['abc, cba'])
new fooProxy('abc', 'cba')