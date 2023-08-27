import React, { memo } from 'react'
import Home from './c-cnps/home'
import About from './c-cnps/about'
import { userContext, themeContext } from './context'

const App = memo(() => {
  return (
    <div>
      <themeContext.Provider value={{ color: 'red', fontSize: 30 }}>
        <userContext.Provider value={{ name: 'bob', age: 20 }}>
          <Home></Home>
          <About></About>
        </userContext.Provider>
      </themeContext.Provider>
    </div>
  )
})

export default App
