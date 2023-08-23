// 3.3 原型式(封装函数)
function createObj(o) {
  function Foo() {}
  Foo.prototype = o
  return new Foo()
}

// 4. 寄生式组合式
function inherit(subType, superType) {
  subType.prototype = createObj(superType.prototype)
  Object.defineProperty(subType.prototype, 'constructor', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: subType
  })
}

function Person(name, age, address) {
  this.name = name
  this.age = age
  this.address = address
}
Person.prototype.running = function () {
  console.log(this.name + 'running~')
}

function Student(name, age, height) {
  // 2. 借用构造函数实现属性继承
  Person.call(this, name, age)
  this.height = height
}
// 1. 原型链实现方法继承
// Student.prototype = new Person()

// 3. 原型式实现方法继承
// 3.1
// const obj = {}
// obj.__proto__ = Person.prototype
// Object.setPrototypeOf(obj, Person.prototype)
// Student.prototype = obj
// 3.2
// Student.prototype = Object.create(Person.prototype)
// 3.3(常用)
// Student.prototype = createObj(Person.prototype)

// 4. 寄生组合式(终极方案)
inherit(Student, Person)

Student.prototype.studying = function () {
  console.log(this.name + 'studying~')
}

const p = new Person('zs', 30, '杭州市')
console.log(p.name, p.age, p.address)
p.running()

const s = new Student('ls', 18, 1.88)
console.log(s.name, s.age, s.height)
s.studying()
s.running()

console.log(s.__proto__ === Student.prototype)
console.log(s.__proto__.constructor === Student)
