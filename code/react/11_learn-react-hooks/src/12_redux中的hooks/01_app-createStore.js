import React, { memo, useEffect, useState } from 'react'
import store from './store-01'
import { changeName, changeAge } from './store-01/actionCreators'

const App = memo(() => {
  const { name, age } = store.getState()
  const [nName, setNname] = useState(name)
  const [aAge, setAage] = useState(age)

  store.subscribe(() => ({
    name: setNname('tom'),
    age: setAage(aAge + 1)
  }))

  function changeNameHandle(name) {
    store.dispatch(changeName(name))
  }
  function changeAgeHandle(age) {
    store.dispatch(changeAge(age))
  }
  return (
    <div>
      <h2>
        {name} --- {age}
      </h2>
      <h3>
        {nName} -- {aAge}
      </h3>
      <button onClick={() => changeNameHandle('tom')}>改变name</button>
      <button onClick={() => changeAgeHandle(10)}>改变age</button>
    </div>
  )
})

export default App
