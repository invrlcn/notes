class Person<T> {
  name: T
  age: T
  hobby: T
  constructor(name: T, age: T, hobby: T) {
    this.age = age
    this.name = name
    this.hobby = hobby
  }
  foo<T>() {
    console.log('foo~')
  }
}

const p1 = new Person(10, 20, 30,)
const p2 = new Person('abc', 'acd', 'acb',)