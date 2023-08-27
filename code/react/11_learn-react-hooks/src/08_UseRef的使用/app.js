import React, {
  memo,
  useRef,
  useState,
  createRef,
  useEffect,
  useCallback
} from 'react'

let obj = null

const App = memo(() => {
  // const refs = createRef()
  const [msg, setMsg] = useState('hello, react')
  const [counter, setCounter] = useState(100)

  // 1. 获取DOM元素
  const msgRef = useRef()
  const inpRef = useRef()

  // 2. 返回一个不变的对象
  const objRef = useRef()
  console.log(obj === objRef)
  obj = objRef

  // 解决闭包陷阱
  const counterRef = useRef()
  const increment = useCallback(() => {
    counterRef.current = counter
    setCounter(counterRef.current + 1)
  }, [counterRef.current])

  useEffect(() => {
    console.log(msgRef.current)
    inpRef.current.focus()
  }, [msg])
  return (
    <div>
      <h2 ref={msgRef}>{msg}</h2>
      <input type="text" ref={inpRef} />
      <h2>当前计数: {counter}</h2>
      <button onClick={() => setMsg('hello, world')}>改变文本</button>
      {/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
      <button onClick={increment}>+1</button>
    </div>
  )
})

export default App
