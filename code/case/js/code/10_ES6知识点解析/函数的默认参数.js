// es5
function foo(name, age) {
  name = name || 'yr'
  age = age || 18
  console.log(name, age)
}
// foo()

// es6
// 方法一
function bar(name = 'yr', age = 18) {
  console.log(name, age)
}
// bar()
// 方法二
function bar({name, age} = {name: 'yr', age: 18}) {
  console.log(name, age)
}
// bar()
// 方法三
function bar({name = 'yr', age = 18} = {}) {
  console.log(name, age)
}
bar()