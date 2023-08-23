function foo(m, n) {
  console.log({ name: 'bob' }, m + n)
}

function cnCurryFn(fn) {
  function curried(...args1) {
    if (args1.length >= fn.length) {
      return fn.apply(this, args1)
    } else {
      return function (...args2) {
        return curried.apply(this, args1.concat(args2))
      }
    }
  }
  return curried
}

const f = cnCurryFn(foo)
f(10, 20)
f(10)(20)


