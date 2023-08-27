import React, { memo, useState, useRef, useDeferredValue } from 'react'

const App = memo(() => {
  const [msg, setMsg] = useState('hello, react')
  const inpRef = useRef()

  const newMsg = useDeferredValue(msg)
  console.log(11111111111111)
  function changeHandle() {
    console.log(2222222222)
    setMsg(inpRef.current.value)
  }
  console.log(3333333333333333)
  return (
    <div>
      <h2>{newMsg}</h2>
      <input ref={inpRef} type="text" value={newMsg} onChange={changeHandle} />
    </div>
  )
})

export default App
