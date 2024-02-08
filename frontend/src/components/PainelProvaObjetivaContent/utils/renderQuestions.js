import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import buttonCustomStyle from "../styles/buttonCustomStyle";

const renderQuestions = (start, end, questionsState, handleQuestionClick) => {
  let questions = [];
  for (let i = start; i <= end; i++) {
    questions.push(
      <Grid item xs={2.4} key={i}>
        <Button
          style={buttonCustomStyle[questionsState[i].status]}
          onClick={() => handleQuestionClick(i)}
          sx={{
            height: "25px",
            width: "30px",
            marginBottom: "10px",
            minWidth: 0,
          }}
        >
          <Typography variant="subtitle2">{i}</Typography>
        </Button>
      </Grid>
    );
  }
  return questions;
};

export default renderQuestions;
