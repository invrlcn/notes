import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
  const [message, SetMessage] = useState('hello, world')

  useEffect(() => {
    // 页面第一次渲染数据变化会执行
    console.log(11111111111)
  })

  useEffect(() => {
    // 页面第一次渲染message变化会执行
    console.log(2222222222)
  }, [message])

  useEffect(() => {
    // 只在页面第一次渲染会执行  类似与componentDidMount
    console.log(33333333333)
  }, [])

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => SetMessage('hello, react')}>修改文本</button>
    </div>
  )
})

export default App
