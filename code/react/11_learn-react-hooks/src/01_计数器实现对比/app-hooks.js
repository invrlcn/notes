import React, { memo, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(100)
  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
