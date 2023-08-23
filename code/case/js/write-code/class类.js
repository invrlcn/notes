class Person {
  constructor(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
  }
  running() {
    console.log(this.name + 'running~')
  }
  static eating() {
    console.log(this.name + 'eating~')
  }
}

class Student extends Person {
  constructor(name, age, height, address) {
    super(name, age, height)
    this.address = address
  }
  studying() {
    console.log(this.name + 'studying~')
    super.running()
  }
  static jap() {
    console.log(this.name + 'jap~')
    super.eating()
  }
}

const p = new Person('ls', 30, 1.88)
console.log(p.name, p.age, p.height)
p.running()
Person.eating()

const s = new Student('zs', 18, 1.77, '杭州市')
console.log(s.name, s.age, s.height, s.address)
s.studying()
Student.jap()

// 标签模板字符串
const str = 'bob'
const num = 10

function foo(...args) {
  console.log(args)
}
foo('hello, world')
foo`hello${str}, world${num}`
