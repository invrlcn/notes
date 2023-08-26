import React, { memo, useState, useCallback, useRef } from 'react'

// useCallback性能优化的点:
// 1.当需要将一个函数传递给子组件时, 最好使用useCallback进行优化, 将优化之后的函数, 传递给子组件

const Child = props => {
  console.log('child 组件')
  const { counterHandle } = props.handle
  return (
    <div>
      <h4>Child Page</h4>
      <button onClick={counterHandle}>Child btn</button>
    </div>
  )
}

const App = memo(() => {
  const [counter, setCounter] = useState(100)

  // 进一步的优化: 当counter发生改变时, 也使用同一个函数
  // 做法一: 将counter依赖移除掉, 缺点: 闭包陷阱
  // 做法二: useRef, 在组件多次渲染时, 返回的是同一个值

  const counterRef = useRef()
  counterRef.current = counter

  const counterHandle = useCallback(function () {
    console.log('counterHandle')
    setCounter(counterRef.current + 1)
  }, [])
  return (
    <div>
      <h2>{counter}</h2>

      <Child handle={counterHandle}></Child>
      <button onClick={() => counterHandle()}>+1</button>
    </div>
  )
})

export default App
