// never 表示永远不会发生值的类型，比如一个函数：
// 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗？ 不会
// 那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型；

function foo() {
  // 死循环
  while(true) {
    console.log('11')
  }
}

function bar() {
  throw new Error()
}

// 封装一个核心函数
function handleMessage(msg: string | number | boolean) {
  switch(typeof msg) {
    case 'string':
      console.log('string方式处理msg')
      break
    case 'number':
      console.log('number方式处理msg')
      break
    case 'boolean':
      console.log('boolean方式理出msg')
      break
    default:
      const check: never = msg
  }
}

handleMessage('asd')
handleMessage(123)
handleMessage(true)


export {}