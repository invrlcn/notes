// 我们会发现interface和type都可以用来定义对象类型，那么在开发中定义对象类型时，到底选择哪一个呢？
// 如果是定义非对象类型，通常推荐使用type，比如Direction、Alignment、一些Function； 如果是定义对象类型，那么他们是有区别的：
// interface 可以重复的对某个接口来定义属性和方法；
// 而type定义的是别名，别名是不能重复的；

interface IPerson {
  name: string
}
interface IPerson {
  age: number
}