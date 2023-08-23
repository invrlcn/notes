interface ISwim {
  name: string
  swimming: () => void
}

interface IDog {
  age: number
  running: () => void
}

// 接口interface可以实现多继承(类不支持多继承)
interface Ip extends ISwim, IDog {
  hobby: string
}

const foo: Ip = {
  name: 'bob',
  age: 20,
  hobby: 'book',
  swimming() {
    console.log('swimming')
  },
  running() {
    console.log('running')
  }
}

console.log(foo.name, foo.age, foo.hobby)
foo.running()
foo.swimming()