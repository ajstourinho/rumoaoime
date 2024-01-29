import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  username: "",
  email: "",
  pictureUrl: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser: (state, { payload }) => {
        return {
          isLoggedIn: true,
          username: payload.username,
          email: payload.email,
          pictureUrl: payload.pictureUrl,
        }
    },
  },
})

export const { logInUser } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer