// 1.导入方式一: 普通的导入
// import { name, age, foo } from "./foo.js"
// console.log(name, age)
// foo()

// 2.导入方式二: 起别名
// import { name as newName, age as newAge, foo as bar} from './foo.js'
// console.log(newName, newAge)
// bar()

// 3.导入方式三: 将导出的所有内容放到一个标识符中
import * as foo from './foo.js'
console.log(foo.name,  foo.age)
foo.foo()