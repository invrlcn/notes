type info = {
  name: string,
  friend?: {
    name?: string
    age?: number
  }
}

// 可选链?. 作用是当对象的属性不存在时，会短路，直接返回undefined，如果存在，那么才会继续执行
const info: info = {
  name: 'bob',
  friend: {
    name: 'mary',
    age: 10
  }
}
console.log(info.name)
console.log(info.friend)
console.log(info.friend?.name)