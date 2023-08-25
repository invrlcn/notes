import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(100)

  useEffect(() => {
    console.log(11111111111)

    return () => {
      // 取消监听
    }
  })
  useEffect(() => {
    console.log(2222222222222)

    return () => {
      // 取消监听
    }
  })
  useEffect(() => {
    console.log(333333333333)

    return () => {
      // 取消监听
    }
  })

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
