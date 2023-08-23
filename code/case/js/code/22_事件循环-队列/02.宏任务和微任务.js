setTimeout(() => {
  console.log('setTimeout')
}, 1000)

queueMicrotask(() => {
  console.log('queueMicrotask')
})

Promise.resolve().then(res => {
  console.log(res, 'Promise then')
})

function foo() {
  console.log('foo')
}

function bar() {
  console.log('bar')
  foo()
}
bar()

console.log('其他代码')