import React, { useState } from "react";
import Box from "@mui/material/Box";
import { saveQuestion } from "../utils/dataHandler";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { allActions } from "../actions/combinedActions";
import { useDispatch, useSelector } from "react-redux";

const QuestionsForm = () => {
  const [valueA, setvalueA] = useState('');
  const [valueB, setvalueB] = useState('');
  const loggedInUser = useSelector((state)=> state.userAuth);
  const [userId, setuserId] = useState(loggedInUser);
  const dispact = useDispatch();
  const handleSubmit = () => {
      console.log(valueA,valueB)
    saveQuestion({valueA, valueB, userId}).then(
        question=>{
            dispact(allActions.questionActions.questionAdd(question));
            dispact(allActions.usersActions.addQuestionToUser(question.id, question.author));
        }
    )
  };
  const textHandler = (e) => {
    switch (e.target.id) {
      case "optionOne":
        setvalueA(e.target.value);
        break;
      case "optionTwo":
        setvalueB(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <Box
      sx={{
        minWidth: 600,
        maxWidth: 600,
        maxHeight: 600,
        minHeight: 600,
        margin: "auto",
        backgroundColor: "#4A8FE7",
        borderRadius: 4,
        padding: "20px",
      }}
    >
      <h2>quesiton form</h2>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <h4>Question One:</h4>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            onChange={textHandler}
            id="optionOne"
            label="Question One"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth>
          <h4>Quesiton Two:</h4>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            onChange={textHandler}
            id="optionTwo"
            label="Question Two"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth>
          <Button
            variant="contained"
            sx={{
              maxWidth: 100,
              marginTop: "10px",
              marginLeft: "13cm",
              background: "#FCF7FF",
              color: "#59D2FE",
            }}
            // type="submit"
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default QuestionsForm;
