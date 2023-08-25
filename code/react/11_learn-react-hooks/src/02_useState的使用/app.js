import React, { memo, useState } from 'react'

const App = memo(() => {
  const [msg, setMsg] = useState('hello, world')
  return (
    <div>
      <h2>{msg}</h2>
      <button onClick={() => setMsg('hello, react')}>修改文本</button>
    </div>
  )
})

export default App
