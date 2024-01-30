import { createSlice } from '@reduxjs/toolkit'

const blankState = {
  isLoggedIn: false,
  username: "",
  email: "",
  pictureUrl: ""
}

const localStorageUserSessionData = localStorage.getItem('userSessionData')

const conditionalInitialState = (localStorageUserSessionData === null) ? blankState : JSON.parse(localStorageUserSessionData)

export const userSlice = createSlice({
  name: 'user',
  initialState: conditionalInitialState,
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

      return blankState
    }
  },
})

export const { logInUser, logOutUser } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer