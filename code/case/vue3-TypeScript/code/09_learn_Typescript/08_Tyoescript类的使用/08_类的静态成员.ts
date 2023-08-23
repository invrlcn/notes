class Person {
  name: string = 'bob'
  static age: number = 20
  static eating() {
    console.log(this.name + 'eating')
  }
}

const p = new Person()
console.log(p.name)
console.log(Person.age)
Person.eating()

export {}