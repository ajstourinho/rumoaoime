import { createSlice } from "@reduxjs/toolkit";

const initialQuestionsState = {};
const start = 1;
const end = 40;
for (let i = start; i <= end; i++) {
  initialQuestionsState[i] = {
    status: "notSeen",
  };
}

const localStorageQuestionsState = localStorage.getItem("questionsState");

const conditionalInitialState =
  localStorageQuestionsState === null
    ? initialQuestionsState
    : JSON.parse(localStorageQuestionsState);

export const questionsSlice = createSlice({
  name: "questions",
  initialState: conditionalInitialState,
  reducers: {
    changeQuestionState: (state, { payload }) => {
      const newState = state;
      newState[payload.questionNumber] = payload.questionState;

      localStorage.setItem("questionsState", JSON.stringify(newState));

      return newState;
    },
    unsetCurrent: (state) => {
      const newState = state;

      for (const key in newState) {
        if (newState[key].status == "current") {
          newState[key] = { ...newState[key], status: "seen" };
          break;
        }
      }

      return newState;
    },
  },
});

export const { changeQuestionState, unsetCurrent } = questionsSlice.actions;

export const selectQuestions = (state) => state.questions;

export default questionsSlice.reducer;
