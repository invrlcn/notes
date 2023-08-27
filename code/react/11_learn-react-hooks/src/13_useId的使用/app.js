import React, { memo, useId, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(100)

  // 无论渲染多少次 useId()生成的值都是唯一的
  const id = useId()
  console.log(id)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
