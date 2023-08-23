function Foo(name, age) {
  this.name = name
  this.age = age
}
Foo.prototype.eating = function() {
  console.log(this.name + '正在吃')
}

// 定义一个新的类  参数为对象原型，进行转换
function newObj(o) {
  function f() {}
  f.prototype = o
  return new f()
}

// 核心代码
function creatProx(subType, superType) {
  subType.prototype = newObj(superType.prototype)
  subType.prototype.constructor = subType
}

creatProx(Bar, Foo)

function Bar(name, age, score) {
  Foo.call(this, name, age)
  this.score = score
}
// Bar.prototype = Object.create(Foo)   // 对象方法实现
Bar.prototype.studying = function() {
  console.log(this.name + '正在学习')
}
Bar.prototype.sec = '男'

var b1 = new Bar('tom', 18, 100)
console.log(b1)
b1.studying()
b1.eating()