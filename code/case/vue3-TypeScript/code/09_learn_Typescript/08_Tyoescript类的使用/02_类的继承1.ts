class Person {
  name: string = 'bob'      // 做初始化
  age: number = 20

  eating() {
    console.log(this.name + ' eating')
  }
}

class Teacher extends Person {
  hobby: string = 'book'
  booking() {
    console.log('Teacher booking')
  }
}

const t = new Teacher()
console.log(t.name)
console.log(t.age)
console.log(t.hobby)
t.booking()
t.eating()