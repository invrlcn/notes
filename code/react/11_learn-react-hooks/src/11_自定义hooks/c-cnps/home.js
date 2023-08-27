import React, { memo, useContext } from 'react'
import { useContextData } from '../hooks'

const Home = memo(props => {
  const [{ age, name }, { color, fontSize }] = useContextData()
  return (
    <div>
      <h2 style={{ color, fontSize }}>
        Home组件
        {name} -- {age}
      </h2>
    </div>
  )
})

export default Home
