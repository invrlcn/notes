import React, { memo } from 'react'
import Home from './home'
import { themeContext, userContext } from './context'

const App = memo(() => {
  return (
    <div>
      <themeContext.Provider value={{ font: 30, color: 'red' }}>
        <userContext.Provider value={{ name: 'bob', age: 20 }}>
          <Home></Home>
        </userContext.Provider>
      </themeContext.Provider>
    </div>
  )
})

export default App
