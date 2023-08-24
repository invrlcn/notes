import * as data from './constants'

export const changeCounter = counter => ({
  type: data.CHANGE_COUNTER,
  counter
})
