import React, { memo, useState, useMemo, useRef } from 'react'

const Child = props => {
  console.log('child 组件')
  return (
    <div>
      <h4>Child Page</h4>
    </div>
  )
}

function numHandle(num) {
  let total = 0
  for (let i = 0; i <= num; i++) {
    total += i
  }
  return total
}
const App = memo(() => {
  const [counter, setCounter] = useState(100)

  // 1.不依赖任何的值, 进行计算
  // const result = useMemo(() => {
  //   console.log('-----------')
  //   return numHandle(30)
  // }, [])

  // 2.依赖counter
  const result = useMemo(() => {
    console.log('-----------')
    return numHandle(30)
  }, [counter])

  return (
    <div>
      <h2>{counter}</h2>
      <h2>计算结果:{result}</h2>

      <Child></Child>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
