import React, { memo, useContext } from 'react'
import { themeContext, userContext } from './context'

const Home = memo(() => {
  const theme = useContext(themeContext)
  const user = useContext(userContext)
  return (
    <div>
      {/* <themeContext.Consumer>
        {value => {
          return (
            <h2 style={{ fontSize: value.font, color: value.color }}>
              Hope Page
            </h2>
          )
        }}
      </themeContext.Consumer> */}

      <h2 style={{ fontSize: theme.font, color: theme.color }}>
        {user.name} --- {user.age}
      </h2>
    </div>
  )
})

export default Home
