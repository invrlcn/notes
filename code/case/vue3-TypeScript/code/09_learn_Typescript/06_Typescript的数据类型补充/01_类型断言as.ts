// 1. 类型断言as
// 有时候TypeScript无法获取具体的类型信息，这个我们需要使用类型断言（Type Assertions）
const el = document.getElementById('lcn') as HTMLImageElement

el.src = 'url地址'

// 2.另外案例: Person是Student的父类

class Person {}

class Student extends Person {
  studying() {
    console.log('studying执行')
  }
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)