/*
  会进行属性的覆盖
*/

function foo(name, age, address) {
  foo.prototype.name = name
  foo.prototype.age = age
  foo.prototype.address = address
  foo.prototype.eating = function() {
    console.log(this.name + '在吃饭' )
  }
  foo.prototype.runing = function() {
    console.log(this.address + '在中国' )
  }
}
var f1 = new foo('zs', 12, '北京')
var f2 = new foo('ls', 22, '上海')
// Object.defineProperty(f1, 'constructor', {
//   configurable: true,
//   enumerable: true
// })
// console.log(f1.name)
// console.log(f2.name)
// console.log(f1.__proto__ === foo.prototype)
// console.log(Object.getPrototypeOf(f1).name)
// console.log(f1.__proto__.name)
console.log(f1.__proto__)
console.log(foo.prototype)
console.log(foo.prototype.constructor === foo)
console.log(foo.prototype.constructor === f1.__proto__.constructor)
console.log(foo.__proto__)
console.log(Object.getPrototypeOf(foo))