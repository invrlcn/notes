import * as data from './constants'

// 初始化数据
const initState = {
  counter: 100
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case data.CHANGE_COUNTER:
      return { ...state, counter: state.counter + action.counter }
    default:
      return state
  }
}
