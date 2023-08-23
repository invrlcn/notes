interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 类实现接口
class Animal {
  foo() {
    console.log('foo执行')
  }
}

// 继承: 只能实现单继承
// 实现: 实现接口, 类可以实现多个接口

class Student extends Animal implements ISwim, IEat {
  swimming() {
    console.log('swimming执行')
  }
  eating() {
    console.log('eating执行')
  }
}

class Person implements ISwim {
  swimming() {
    console.log('Person swimming')
  }
}

// 编写一些公共的API: 面向接口编程
function foo(params: ISwim) {
  params.swimming()
}

// 所有实现了接口的类对应的对象, 都是可以传入
foo(new Person())
foo(new Student())

const s = new Student()
s.eating()
s.foo()
s.swimming()
export {}