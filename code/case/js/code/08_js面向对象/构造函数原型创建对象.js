function Person(name, age, address) {
  this.name = name
  this.age = age
  this.address = address
  Person.prototype.eating = function() {
    console.log(this.name + '在吃饭' )
  }
  Person.prototype.runing = function() {
    console.log(this.address + '在中国' )
  }
} 
var p1 = new Person('zs', 12, '北京')
var p2 = new Person('ls', 22, '上海')
console.log(p1)
console.log(p2)
console.log(p1.name)
console.log(p2.name)