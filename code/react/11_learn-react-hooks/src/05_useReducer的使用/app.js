import React, { memo, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
    case 'decrement':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, { counter: 100, friends: [] })

  return (
    <div>
      <h2>当前计数: {state.counter}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  )
})

export default App
