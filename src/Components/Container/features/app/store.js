import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import datesReducer from '../counter/datesSlice'
import  userReducer  from '../counter/inputSearchSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dates: datesReducer,
    user: userReducer,

  },
})
