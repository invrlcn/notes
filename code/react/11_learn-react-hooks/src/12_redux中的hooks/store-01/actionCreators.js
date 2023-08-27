import { CHANGE_AGE, CHANGE_NAME } from './constants'
const changeName = name => ({
  type: CHANGE_NAME,
  name
})

const changeAge = age => ({
  type: CHANGE_AGE,
  age
})

export { changeName, changeAge }
