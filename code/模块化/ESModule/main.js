// 导入方式一
// import { name, age, foo } from './foo.js'
// import { newName, newAge, newFoo } from './foo.js'

// 导入方式二
// import { name as newName, age as newAge, foo as newFoo } from './foo.js'

// 导入方式三
// import * as foo from './foo.js'

// console.log(foo.name)
// console.log(foo.age)
// foo.foo()

// import { foo, bar } from './index.js'
// console.log(foo.name, bar.address, foo.age, bar.height)
// foo.foo()
// bar.bar()

// import baz from './baz.js'
// baz()

// import()

setTimeout(() => {
  import('./import.js').then(res => {
    console.log(res)
  })
}, 3000)

// import.meta
console.log(import.meta)
