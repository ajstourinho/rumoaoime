import React, { useState, useEffect } from "react";
import { Stack, Button, Grid, Typography, Box } from "@mui/material";
import TempoDeProva from "../TempoDeProva/TempoDeProva";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuestionState,
  selectQuestions,
  unsetCurrent,
} from "../../store/slices/questionsSlice";
import renderQuestions from "./utils/renderQuestions";
import buttonCustomStyle from "./styles/buttonCustomStyle";
import { useTheme } from "@mui/material";

const PainelProvaObjetivaContent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const dispatch = useDispatch();
  const questionsState = useSelector(selectQuestions);
  
  const theme = useTheme();

  // Initialize component unsetting current question (as useState currentQuestion == null)
  useEffect(() => {
    dispatch(unsetCurrent());
  }, [])

  const handleQuestionClick = (questionNumber) => {
    // Changing current question
    if (currentQuestion !== null) {
      // If this is not the first question clicked
      dispatch(
        changeQuestionState({
          questionNumber: currentQuestion, // previous current question
          questionState: {
            status: "seen",
          },
        })
      );
    }
    dispatch(
      changeQuestionState({
        questionNumber,
        questionState: {
          status: "current",
        },
      })
    );

    setCurrentQuestion(questionNumber);
  };

  const handleSubmit = () => {
    // Logic to handle the submit action
    console.log("Test submitted.");
  };

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Stack direction="column" gap={1}>
          <TempoDeProva tempo="00:00" />

          <Button
            style={
              currentQuestion == null
                ? buttonCustomStyle["current"]
                : buttonCustomStyle["seen"]
            }
            onClick={() => {
              setCurrentQuestion(null);
              dispatch(unsetCurrent());
            }}
            sx={{
              p: 0.5,
              marginBottom: "10px",
              minWidth: 0,
            }}
          >
            <Typography variant="subtitle2">Instruções iniciais</Typography>
          </Button>

          <Divider />

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Matemática:
            </Typography>
            <Grid container>
              {renderQuestions(1, 15, questionsState, handleQuestionClick)}
            </Grid>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Física:
            </Typography>
            <Grid container>
              {renderQuestions(16, 30, questionsState, handleQuestionClick)}
            </Grid>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Química:
            </Typography>
            <Grid container>
              {renderQuestions(31, 40, questionsState, handleQuestionClick)}
            </Grid>
          </Box>
        </Stack>

        <Divider />

        <Button
          style={{
            backgroundColor: theme.palette.rumoaoimeCustomColors.darkBlue,
            color: "white",
          }}
          onClick={handleSubmit}
          sx={{
            p: 0.5,
            width: "100%",
            mt: 2,
          }}
        >
          <Typography variant="caption">FINALIZAR</Typography>
        </Button>
      </Box>
    </>
  );
};

export default PainelProvaObjetivaContent;
