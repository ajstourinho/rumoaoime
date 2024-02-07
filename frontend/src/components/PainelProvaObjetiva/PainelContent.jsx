import React, { useState } from "react";
import { Stack, Button, Grid, Typography, Box } from "@mui/material";
import TempoDeProva from "./TempoDeProva";
import Divider from "@mui/material/Divider";


const PainelContent = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Your timer state and logic would go here.
  // For brevity, we're not implementing a full timer.

  const handleQuestionClick = (questionNumber) => {
    setSelectedQuestion(questionNumber);
    // Additional logic for when a question is clicked
  };

  const handleSubmit = () => {
    // Logic to handle the submit action
    console.log("Test submitted.");
  };

  const renderQuestions = (start, end) => {
    let questions = [];
    for (let i = start; i <= end; i++) {
      questions.push(
        <Grid item xs={2} key={i}>
          <Button
            variant={selectedQuestion === i ? "contained" : "outlined"}
            onClick={() => handleQuestionClick(i)}
            sx={{ p: "0", width: "30px", marginBottom: "4px", minWidth: 0 }}
          >
            <Typography variant="caption">{i}</Typography>
          </Button>
        </Grid>
      );
    }
    return questions;
  };

  return (
    <>
      <TempoDeProva tempo="00:00" />

      <Button
        variant="outlined"
        sx={{ p: "2px", width: "100%", marginBottom: "4px", minWidth: 0 }}
      >
        <Typography variant="caption">Instruções iniciais</Typography>
      </Button>

      <Divider />

      <Box sx={{ mb: 1, mt: 0.5 }}>
        <Typography variant="subtitle1" gutterBottom>
          Matemática:
        </Typography>
        <Grid container>{renderQuestions(1, 15)}</Grid>
      </Box>

      <Divider />

      <Box sx={{ mb: 1, mt: 0.5 }}>
        <Typography variant="subtitle1" gutterBottom>
          Física
        </Typography>
        <Grid container>{renderQuestions(16, 30)}</Grid>
      </Box>

      <Divider />

      <Box sx={{ mb: 1, mt: 0.5 }}>
        <Typography variant="subtitle1" gutterBottom>
          Química
        </Typography>
        <Grid container>{renderQuestions(31, 40)}</Grid>
      </Box>

      <Divider />

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ p: "2px", width: "100%", marginBottom: "4px", minWidth: 0, mt: 1 }}
      >
        <Typography variant="caption">FINALIZAR</Typography>
      </Button>
    </>
  );
};

export default PainelContent;
