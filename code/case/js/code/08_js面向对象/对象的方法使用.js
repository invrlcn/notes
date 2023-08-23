var obj = {
  name: 'tom',
  age: 19
}

var bar = Object.create(obj)   // 对象的继承
bar.name = 'bob'
console.log(bar)
console.log(obj)

// hasOwnProperty() 对象是否有属于自己的属性。不在原型上的
console.log(bar.hasOwnProperty('age'))

// in/for in  判断某个属性是否在某个对象上或对象的原型上
console.log('age' in bar)
for(var i in bar) {
  console.log(i)
}

// instance  用于检测构造函数的prototype 是否出现在某个实例对象的原型链上
function Foo() {}
  var x = Foo;
  var r = new Foo()

console.log(r instanceof x)

// isPrototypeOf  用于检测某个对象，是否出现在某个对象的原型链上
console.log(obj.isPrototypeOf(bar))