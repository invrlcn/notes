class Person {
  private _name: string
  age: number
  constructor(name: string, age: number) {
    this._name = name
    this.age = age
  }

  set name(newName) {
    this._name = newName
  }

  get name() {
    return this._name
  }
}

const p = new Person('bob', 20)
// console.log(p._name)         // 访问不到
console.log(p.name)         // bob
p.name = 'tom'
console.log(p.name)
console.log(p.age)

export {}