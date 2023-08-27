import { createSlice } from '@reduxjs/toolkit'

const counterReducer = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello, react'
  },
  reducers: {
    incrementAction(state, action) {
      state.count = state.count + action.payload
    },
    decrementAction(state, { payload }) {
      state.count = state.count - payload
    },
    changeMsg(state, { payload }) {
      state.message = payload
    }
  }
})

export const { incrementAction, decrementAction, changeMsg } =
  counterReducer.actions

export default counterReducer.reducer
