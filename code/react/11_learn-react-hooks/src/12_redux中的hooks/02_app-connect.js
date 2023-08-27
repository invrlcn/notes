import React, { memo } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction } from './store-02/modules/counter'

const App = memo(props => {
  const { count, addNumber, subNumber } = props

  function changeNum(num, isAdd = true) {
    if (isAdd) {
      addNumber(num)
    } else {
      subNumber(num)
    }
  }
  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={() => changeNum(1)}>+1</button>
      <button onClick={() => changeNum(1, false)}>-1</button>
    </div>
  )
})

const mapStateProps = state => ({
  count: state.counter.count
})

const mapDispatchProps = dispatch => ({
  addNumber(num) {
    dispatch(incrementAction(num))
  },
  subNumber(num) {
    dispatch(decrementAction(num))
  }
})

export default connect(mapStateProps, mapDispatchProps)(App)
