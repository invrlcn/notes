// 案例: 创建一个教室类, 创建出来的对象都是可迭代对象
class Classroom  {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudents) {
    this.students.push(newStudents)
  }
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if(index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}
const c = new Classroom('民勤一中', '高三八班', ['bob', 'mary', 'tom', 'curry'])
c.entry('invrlcn')
// for(const i of c) {
//   console.log(i)
// }

// 自定义函数
function IteratorClassRoom(address, name, students) {
  this.address = address
  this.name = name
  this.students = students
}
IteratorClassRoom.prototype.entry = function(newStudents) {
  this.students.push(newStudents)
}
IteratorClassRoom.prototype[Symbol.iterator] = function() {
  let index = 0
    return {
      next: () => {
        if(index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
}
const foo = new IteratorClassRoom('民勤一中', '高三八班', ['bob', 'mary', 'tom', 'curry'])
foo.entry('invrlcn')
for(const i of foo) {
  console.log(i)
}
