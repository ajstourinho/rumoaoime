import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import questionsReducer from './slices/questionsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        questions: questionsReducer,
    },
})