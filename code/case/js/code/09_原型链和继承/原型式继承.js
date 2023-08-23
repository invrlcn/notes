function Foo(name, age) {
  this.name = name
  this.age = age
}
Foo.prototype.eating = function() {
  console.log(this.name + '正在吃')
}

// 定义一个新的类  参数为对象原型，进行转换
function newObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function Bar(name, age, score) {
  Foo.call(this, name, age)
  this.score = score
}
// 调用,但是需要改变Bar()函数prototype类型为Bar，目前为Foo
Bar.prototype = newObj(Foo.prototype)
// Bar.prototype.constructor = Bar  // 直接赋值
Object.defineProperty(Bar.prototype, 'constructor', {
  configurable: true,
  value: 'Bar'
})  // 通过对象描述符修改
// Bar.prototype = Foo.prototype   // 可以解决Foo()多次调用、Bar()函数里出现无用属性的问题。但是如果给自己原型新增属性会添加到指向的原型上面去
Bar.prototype.studying = function() {
  console.log(this.name + '正在学习')
}
Bar.prototype.sec = '男'
var b1 = new Bar('tom', 18, 100)
console.log(b1)
b1.studying()
b1.eating()