import React, { memo, useRef, useState, createRef, useEffect } from 'react'

const App = memo(() => {
  // const refs = createRef()
  const [msg, setMsg] = useState('hello, react')

  const msgRef = useRef()

  const inpRef = useRef()

  useEffect(() => {
    console.log(msgRef.current)
    inpRef.current.focus()
  }, [msg])
  return (
    <div>
      <h2 ref={msgRef}>{msg}</h2>
      <input type="text" ref={inpRef} />
      <button onClick={() => setMsg('hello, world')}>+1</button>
    </div>
  )
})

export default App
