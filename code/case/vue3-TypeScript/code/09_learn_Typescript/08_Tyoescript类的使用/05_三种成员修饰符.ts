class Person {
  // public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的
  // private: 修饰的是仅在同一类中可见、私有的属性或方法
  // protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法
  private name: string = 'bob'
  age: number = 20
  protected hobby: string = 'book'

  // 封装了两个方法, 通过方法来访问name
  getter() {
    return this.name
  }

  setter(newValue: any) {
    this.name = newValue
  }
}

class Student extends Person {
  foo() {
    console.log(this.age, this.hobby)
  }
}

const p = new Person()
const s = new Student()
// console.log(p.name)       // 访问不到
console.log(p.getter())  // bob
p.setter('tom')  // tom
console.log(p.getter())  // tom
console.log(p.age)
console.log(p.age = 30)
s.foo()
// console.log(p.hobby)   // 访问不到

export {}