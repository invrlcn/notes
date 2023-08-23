// 一种组合类型的方式: 联合类型
type Posion = 'left' | 'right' | 'center'
type Point = number | string

// 另一种组件类型的方式: 交叉类型: 表示需要满足多个类型的条件 交叉类型使用 & 符号
type DogType = number & string      // never

function foo(params: DogType) {
  console.log(params)
}
interface ISwim {
  swimming: () => void
}
interface IDog {
  running: () => void
}

type UniteType = ISwim & IDog

const info: UniteType = {
  swimming() {

  },
  running() {

  }
}

export {}