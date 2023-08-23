interface IPerson {
  name: string
  age: number
}

// const info: IPerson = {
//   name: 'bob',
//   age: 20,
//   // hobby: 'book'           // 报错
// }

// obj为对象的引用
const obj = {
  name: 'tom',
  age: 20,
  hobby: 'book'
}

// 是将一个 变量标识符 赋值给其他的变量时，会进行freshness擦除操作
const p: IPerson = obj
console.log(p.name, p.age, obj.hobby)