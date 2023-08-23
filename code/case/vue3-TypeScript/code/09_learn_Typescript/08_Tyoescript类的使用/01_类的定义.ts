class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log(this.name + 'eating' )
  }
}

const p = new Person('bob', 10)
console.log(p.name)
console.log(p.age)
p.eating()

export {}