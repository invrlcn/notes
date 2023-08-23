class Person {
  name: string
  age: number

  constructor(name: string, age: number) {           // 初始化
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + ' eating')
  }
}

class Teacher extends Person {
  hobby: string

  constructor(name: string, age: number, hobby: string) {
    // 调用父类构造器
    super(name, age)
    this.hobby = hobby
  }

  booking() {
    console.log('Teacher booking')
  }
}

const t = new Teacher( 'bob', 20, 'book' )
console.log(t.name)
console.log(t.age)
console.log(t.hobby)
t.booking()
t.eating()

export {}