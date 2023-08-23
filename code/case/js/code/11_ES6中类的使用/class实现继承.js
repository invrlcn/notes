class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log(1)
    console.log(2)
    console.log(3)
  }
  static staticFn() {
    console.log(this.name +  'staticFn')
  }
}

// super  实现继承构造属性、方法、类方法
class Child extends Person {
  constructor(name, age, nod) {
    super(name, age)
    this.nod = nod
  }
  studying() {
    console.log(this.name +  'studying')
  }
  eating() {
    // super(eating())
    console.log(4)
    console.log(5)
    console.log(6)
  }
  static staticFn() {
    super.staticFn()
  }
}
var f = new Child('mary', 18, 100)
console.log(f)
console.log(f instanceof Person)
f.eating()
f.studying()