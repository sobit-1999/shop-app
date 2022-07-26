import { createSlice } from '@reduxjs/toolkit'
import { imgNameWomenCurveMenKids } from '../../../AvatarName'


const initialState = {
  value: imgNameWomenCurveMenKids
}

// const initialState2 = {
//   }

export const counterSlice = createSlice({
  name: 'dates',
  initialState,



  reducers: {

  },

})

// Action creators are generated for each case reducer function
// export const { increment, decrement  } = counterSlice.actions

export default counterSlice.reducer