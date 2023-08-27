import React, { forwardRef, memo, useRef, useImperativeHandle } from 'react'

const Child = memo(
  forwardRef((props, ref) => {
    const inpRef = useRef()

    // 子组件对父组件传入的ref进行处理
    useImperativeHandle(ref, () => {
      return {
        focus() {
          console.log('focus')
          inpRef.current.focus()
        },
        setValue(value) {
          inpRef.current.value = value
        }
      }
    })

    return (
      <div>
        <h2>Child Page</h2>
        <input ref={inpRef} />
      </div>
    )
  })
)
const App = memo(() => {
  const childRef = useRef()

  function handleDOM() {
    console.log(childRef.current)
    childRef.current.focus()
    childRef.current.setValue('react')
  }
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={handleDOM}>DOM操作</button>
    </div>  
  )
})

export default App
