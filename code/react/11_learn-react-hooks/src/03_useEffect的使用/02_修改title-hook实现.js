import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(100)

  useEffect(() => {
    document.title = counter
  }, [counter])
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App
