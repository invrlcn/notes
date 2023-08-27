import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction } from './store-02/modules/counter'

const App = memo(props => {
  // 1.使用useSelector将redux中store的数据映射到组件内
  const { count } = useSelector(state => ({
    count: state.counter.count
  }))

  // 2.使用dispatch直接派发action
  const dispatch = useDispatch()
  function changeNum(num, isAdd = true) {
    if (isAdd) {
      dispatch(incrementAction(num))
    } else {
      dispatch(decrementAction(num))
    }
  }
  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={() => changeNum(1)}>+1</button>
      <button onClick={() => changeNum(1, false)}>+1</button>
    </div>
  )
})

export default App
