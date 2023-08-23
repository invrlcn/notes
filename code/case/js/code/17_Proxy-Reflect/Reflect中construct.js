function Student(name, age) {
  this.name = name
  this.age = age
}

// const stu = new Student("why", 18)
// console.log(stu)
// console.log(stu.__proto__ === Student.prototype)

function Teacher() {}
const res = Reflect.construct(Student, ['bob', 18], Teacher)

// 执行Student函数中的内容, 但是创建出来对象是Teacher对象
console.log(res.__proto__ === Teacher.prototype)  // true