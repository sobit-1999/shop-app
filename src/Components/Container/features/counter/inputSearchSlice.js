// import { createSlice } from '@reduxjs/toolkit'


// const initialState = {
//     value: 'u',
// }


// export const searchSlice = createSlice({
//     name: 'search',
//     initialState,
    
    
    
//     reducers: {
//         // searchQuery: (val) => (state(value))
//     },
// })
// export const { onchange  } = searchSlice.actions

// export default searchSlice.reducer



import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;