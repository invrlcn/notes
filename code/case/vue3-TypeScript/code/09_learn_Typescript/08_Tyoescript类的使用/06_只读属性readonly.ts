class Person {
  readonly name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p = new Person('bob', 20)
console.log(p.name)
console.log(p.age)

// console.log(p.name = 'tom')    // 无法修改
console.log(p.age = 30)