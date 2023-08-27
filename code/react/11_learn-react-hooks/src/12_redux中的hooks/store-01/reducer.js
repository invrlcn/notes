import { CHANGE_AGE, CHANGE_NAME } from './constants'
const initState = {
  name: 'bob',
  age: 20
}

function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_AGE:
      return { ...state, age: action.age + state.age }
    case CHANGE_NAME:
      return { ...state, name: action.name }

    default:
      return state
  }
}

export default reducer
