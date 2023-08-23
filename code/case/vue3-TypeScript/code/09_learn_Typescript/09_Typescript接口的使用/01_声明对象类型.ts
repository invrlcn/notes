// 通过type
// type Point = {
//   x: number,
//   y: number
// }

// 通过接口

interface Point {
  x: number
  y: number
  readonly hobby: string           // 只读属性
  friend?: {          // 可选类型
    name: string
  }
}

const info: Point = {
  x: 10,
  y: 20,
  hobby: 'book',
  friend: {
    name: 'bob'
  }
}

console.log(info.x, info.y, info.hobby, info.friend?.name)
info.x = 30
// info.hobby = 'movies'         // 只读属性