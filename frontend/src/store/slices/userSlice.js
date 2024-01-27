import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  username: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
        return {...state, isLoggedIn: true, user: payload}
    },
  },
})

export const { logIn } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer