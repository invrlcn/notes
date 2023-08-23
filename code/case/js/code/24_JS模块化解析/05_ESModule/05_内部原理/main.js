import { name, age, foo } from './foo.js'
console.log(name, age)
setTimeout(() => {
  console.log(name)
}, 2000) 
foo(10, 20)