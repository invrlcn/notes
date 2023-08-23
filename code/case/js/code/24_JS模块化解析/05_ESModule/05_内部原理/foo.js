let name = 'bob'
let age = 18

setTimeout(() => {
  name = 'mary'
}, 1000)
function foo(num1, num2) {
  console.log (num1 + num2)
}

export {
  name,
  age,
  foo
}