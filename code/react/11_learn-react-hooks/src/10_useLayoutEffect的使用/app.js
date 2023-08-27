import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)
  // 1. 执行顺序
  console.log('render执行')

  useEffect(() => {
    console.log('useEffect执行')

    // useEffect修改数字(画面有闪烁)
    // if (count === 0) {
    //   setCount(99)
    // }
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect执行')

    // useLayoutEffect(画面无闪烁)
    if (count === 0) {
      setCount(99)
    }
  })

  return (
    <div>
      <h2>当前计数: {count}</h2>
    </div>
  )
})

export default App
