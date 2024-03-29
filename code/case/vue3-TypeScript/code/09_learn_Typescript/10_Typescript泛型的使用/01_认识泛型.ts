// 类型的参数化

// 在定义这个函数时, 我不决定这些参数的类型
// 而是让调用者以参数的形式告知,我这里的函数参数应该是什么类型

function sum<Type>(params: Type): Type {
  return params
}

// 1.调用方式一: 明确的传入类
console.log(sum<number>(10))
console.log(sum<string>('abc'))

// 2.调用方式二: 类型推导
sum(50)
sum("abc")