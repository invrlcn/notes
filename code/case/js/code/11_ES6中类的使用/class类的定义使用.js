// 字面量
// class Person {}

// // 表达式
// var p = class Person {}

// 使用
class Person {
  // 构造方法属性
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // 方法
  eating() {
    console.log(this.name + '正在吃')
  }
  // 静态方法（类方法）
  static staticFn() {
    console.log(this.name + 'staticFn')
  }
}
var p = new Person('zs', 10)
console.log(p)
console.log(p.__proto__ === Person.prototype)
console.log(p.__proto__.constructor === Person)
p.eating()