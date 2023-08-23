  // 父类： 公用的属性和方法
function Parent() {
  this.name = 'zs'
  this.age = 40
  this.friends = []
  this.obj = {}
}
Parent.prototype.eating = function() {
  console.log(this.name + 'eating')
}
Parent.prototype.runing = function() {
  console.log(this.name + 'runing')
}

// 子类：特有的属性和方法
function Child() {
  this.nod = 10
}
Child.prototype = new Parent()   // 子类的prototype 指向父类
Child.prototype.studying = function() {
  console.log(this.name + 'studying')
}
Child.prototype = new Parent()

var p1 = new Child()
var p2 = new Child()
p1.friends.push('ww')   // 会影响
p1.friends = 'lucy'     // 不会影响  因为给自身添加了friends的属性
p1.obj.name = 'kobo'    // 会影响
console.log(p1)
console.log(p2)
/*
  原型链实现继承的弊端：
  1. 无法打印出除自身外继承到的属性和方法（如：name age eating...）
  2. 如果创建多个子类，对引用父类的属性值进行改变，会相互影响
  3. 没有传递参数，对于参数处理不友好
*/