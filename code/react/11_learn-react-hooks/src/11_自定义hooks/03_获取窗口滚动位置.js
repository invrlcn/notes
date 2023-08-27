import React, { memo } from 'react'
import { useScrollPosition } from './hooks'
import './style.css'

const Home = memo(() => {
  return (
    <div>
      <h2>Home page</h2>
    </div>
  )
})
const About = memo(() => {
  const [scrollX, scrollY] = useScrollPosition()
  return (
    <div>
      <h2>About page</h2>
      <h2 className='title'>
        {scrollX} --{scrollY}
      </h2>
    </div>
  )
})

const App = memo(() => {
  return (
    <div className="box">
      App
      <h2>
        <Home />
        <About />
      </h2>
    </div>
  )
})

export default App
