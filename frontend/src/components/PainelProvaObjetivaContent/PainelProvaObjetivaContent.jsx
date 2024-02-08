import React, { useState, useEffect } from "react";
import { Stack, Button, Grid, Typography, Box } from "@mui/material";
import TempoDeProva from "../TempoDeProva/TempoDeProva";
import Divider from "@mui/material/Divider";
import PainelButton from "../PainelButton/PainelButton";
import { useTheme } from "@mui/material";

const PainelProvaObjetivaContent = () => {
  const theme = useTheme();

  const buttonCustomStyle = {
    seen: {
      borderColor: theme.palette.rumoaoimeCustomColors.grey,
      borderWidth: 1,
      borderStyle: "solid",
      color: "black",
      backgroundColor: theme.palette.rumoaoimeCustomColors.lightGrey,
      "&:hover": {
        backgroundColor: theme.palette.rumoaoimeCustomColors.grey,
      },
    },
    notSeen: {
      borderColor: theme.palette.rumoaoimeCustomColors.grey,
      borderWidth: 1,
      borderStyle: "solid",
      color: "black",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: theme.palette.rumoaoimeCustomColors.lightGrey,
      },
    },
    current: {
      borderColor: theme.palette.rumoaoimeCustomColors.grey,
      borderWidth: 1,
      borderStyle: "solid",
      color: "white",
      backgroundColor: theme.palette.rumoaoimeCustomColors.darkGrey,
      "&:hover": {
        backgroundColor: theme.palette.rumoaoimeCustomColors.darkerGrey,
      },
    },
    marked: {
      borderColor: theme.palette.rumoaoimeCustomColors.grey,
      borderWidth: 1,
      borderStyle: "solid",
      color: "white",
      backgroundColor: theme.palette.rumoaoimeCustomColors.darkBlue,
      "&:hover": {
        backgroundColor: theme.palette.rumoaoimeCustomColors.darkerBlue,
      },
    },
  };

  // Initializing blank structure for questionsState
  const initialQuestionsState = {};
  const start = 1;
  const end = 40;
  for (let i = start; i <= end; i++) {
    initialQuestionsState[i] = "notSeen";
  }

  const [questionsState, setQuestionsState] = useState(initialQuestionsState);
  const [, setState] = React.useState(false);

  useEffect(() => {
    console.log("rerendrer");
  }, [questionsState]);

  const handleQuestionClick = (questionNumber) => {
    setQuestionsState((prev) => {
      const newState = prev;
      newState[questionNumber] = "seen";
      return newState;
    });
    setState((prev) => !prev);

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
        <Grid item xs={2.4} key={i}>
          <Button
            style={buttonCustomStyle[questionsState[i]]}
            onClick={() => handleQuestionClick(i)}
            sx={{
              height: "25px",
              width: "30px",
              marginBottom: "10px",
              minWidth: 0,
            }}
          >
            <Typography variant="caption">{i}</Typography>
          </Button>
        </Grid>
      );
    }
    return questions;
  };
  const buttons = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Stack direction="column" gap={2}>
          <TempoDeProva tempo="00:00" />

          <PainelButton state="seen">
            <Typography variant="caption">Instruções iniciais</Typography>
          </PainelButton>

          <Divider />

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Matemática:
            </Typography>
            <Grid container>{renderQuestions(1, 15)}</Grid>
          </Box>
        </Stack>

        {/* 
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
        </Button> */}
      </Box>
    </>
  );
};

export default PainelProvaObjetivaContent;
