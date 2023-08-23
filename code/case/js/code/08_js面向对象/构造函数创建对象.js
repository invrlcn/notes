/*
  每次创建实例都会再次执行构造函数里面的方法消耗性能
*/

function Person(name, age, address) {
  this.name = name
  this.age = age
  this.address = address
  this.eating = function() {
    console.log(this.name + '在吃饭' )
  }
  this.runing = function() {
    console.log(this.address + '在中国')
  }
}
var p1 = new Person('zs', 12, '北京')
var p2 = new Person('ls', 33, '上海')
console.log( p1)
console.log( p2)