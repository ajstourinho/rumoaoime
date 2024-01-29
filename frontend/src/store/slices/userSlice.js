import { createSlice } from '@reduxjs/toolkit'

const initialBlankState = {
  isLoggedIn: false,
  username: "",
  email: "",
  pictureUrl: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialBlankState,
  reducers: {
    logInUser: (state, { payload }) => {

      const userSessionData = {
        isLoggedIn: true,
        username: payload.username,
        email: payload.email,
        pictureUrl: payload.pictureUrl,
      }
      
      localStorage.setItem('userSessionData', JSON.stringify(userSessionData))

      return userSessionData
    },
    logOutUser: (state) => {
      localStorage.removeItem('userSessionData')

      return initialBlankState
    }
  },
})

export const { logInUser, logOutUser } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer