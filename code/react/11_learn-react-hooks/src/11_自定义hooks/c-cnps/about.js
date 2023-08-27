import React, { memo } from 'react'
import { useContextData } from '../hooks'

const About = memo(() => {
  const [{ name, age }, { color, fontSize }] = useContextData()
  return (
    <div>
      <h2 style={{ color, fontSize }}>
        About 组件
        {name} -- {age}
      </h2>
    </div>
  )
})

export default About
