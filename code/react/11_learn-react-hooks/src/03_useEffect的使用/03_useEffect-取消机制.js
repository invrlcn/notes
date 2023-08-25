import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(100)
  useEffect(() => {
    // 监听事件
    console.log('监听事件变化')

    return () => {
      // 取消监听
      console.log('取消监听')
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
