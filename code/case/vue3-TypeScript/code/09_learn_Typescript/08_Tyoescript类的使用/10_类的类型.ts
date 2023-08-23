class Person {
  name: string = 'bob'
  age: number = 20

}
const p = new Person()

const info: Person = {
  name: 'tom',
  age: 30
}

function foo(params: Person) {
  console.log(params.name)
  console.log(params.age)
}