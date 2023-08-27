import React, { memo, useEffect, useState } from 'react'

import { useLife } from './hooks'

const Home = memo(() => {
  useLife('home')
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  )
})
const About = memo(() => {
  useLife('about')
  return (
    <div>
      <h2>About Page</h2>
    </div>
  )
})
const App = memo(() => {
  const [show, setShow] = useState(true)
  useLife('app')
  return (
    <div>
      <h2>App</h2>
      {show && <Home />}
      {show && <About />}
      <button onClick={() => setShow(!show)}>isShow</button>
    </div>
  )
})

export default App
