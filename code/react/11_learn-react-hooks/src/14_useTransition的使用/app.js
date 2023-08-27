import React, { memo, useState, useRef, useTransition } from 'react'

const App = memo(() => {
  const [msg, setMsg] = useState('hello, react')
  const inpRef = useRef()

  const [isPending, startTransition] = useTransition()
  console.log(11111111111111)
  function changeHandle() {
    startTransition(() => {
      console.log(2222222222)
      setMsg(inpRef.current.value)
    })
  }
  console.log(3333333333333333)
  return (
    <div>
      {!isPending && <h2>{msg}</h2>}
      <input ref={inpRef} type="text" value={msg} onChange={changeHandle} />
    </div>
  )
})

export default App
