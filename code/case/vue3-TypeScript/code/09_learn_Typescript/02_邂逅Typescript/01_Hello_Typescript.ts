
 // 类型注解(: string)
 // string和String是有区别的:
 // string: Typescript中定义的字符串类型
 // String: ECMAScript中定义的一个类
const msg: string = 'hello, world'
// const msg = 'hello, world'
// const msg: String = 'hello'

const name: string = 'bob'
const age: number = 18

function foo(payload: string) {
  console.log(payload.length)
}
console.log(msg)
console.log(name)
console.log(age)
foo('hello')
// foo(212)

export {}              // 形成独立的模块，避免全局有相同的命名。如：name