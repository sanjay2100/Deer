import {  configureStore } from '@reduxjs/toolkit'
import userReducer from './Slice'
import stateReducer from './States'



export  const store = configureStore({
    reducer: {
      user:userReducer,
      state:stateReducer
    }
  })