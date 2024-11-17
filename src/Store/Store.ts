import {  configureStore } from '@reduxjs/toolkit'
import userReducer from './Slice'
import stateReducer from './States'
import categoryReducer from './Category'


export  const store = configureStore({
    reducer: {
      user:userReducer,
      state:stateReducer,
      category:categoryReducer
    }
  })