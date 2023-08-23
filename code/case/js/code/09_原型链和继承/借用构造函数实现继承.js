// 父类
function Parent(name, age) {
  this.name = name
  this.age = age
  this.friends = []
}
Parent.prototype.eating = function() {
  console.log(this.name + 'eating')
}
Parent.prototype.runing = function() {
  console.log(this.name + 'runing')
}

// 子类
function Child(name, age, nod, exc) {
  this.nod = nod
  this.exc = exc
  // Parent.apply(this, [name, age])
  Parent.call(this, name, age)   // 通过call/apply调用父类，把当前的this传递给父类
}
Child.prototype = new Parent()
Child.prototype.studying = function() {
  console.log(this.name + 'studying')
}

var p1 = new Child('lucy', 18, 101, 89)
var p2 = new Child('kdy', 20, 120, 92)
p1.friends.push('zs')
console.log(p1)
console.log(p2)
console.log(p1.eating())

/*
  借用构造函数实现继承的弊端：
  1. 父类被多次调用影响性能
  2. 子类原型上会多一些属性，但是这些属性没有存在的必要
*/