import { createSlice } from '@reduxjs/toolkit'

const initialQuestionsState = {};
const start = 1;
const end = 40;
for (let i = start; i <= end; i++) {
  initialQuestionsState[i] = "notSeen";
}

const localStorageQuestionsState = localStorage.getItem('questionsState')

const conditionalInitialState = (localStorageQuestionsState === null) ? initialQuestionsState : JSON.parse(localStorageQuestionsState)

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: conditionalInitialState,
  reducers: {
    changeQuestionState: (state, { payload }) => {

      const newState = state;
      newState[payload.questionNumber] = payload.questionState;
      
      localStorage.setItem('questionsState', JSON.stringify(newState))

      return newState
    },
  },
})

export const { changeQuestionState } = questionsSlice.actions

export const selectQuestions = (state) => state.questions

export default questionsSlice.reducer