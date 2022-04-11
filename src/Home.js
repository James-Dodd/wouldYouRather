import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import QuestionCard from "./components/Cards/QuestionCard";
import { useSelector } from "react-redux";
import QuestionsForm from "./components/QuestionsForm";
import Leaderboard from "./components/LeaderBoard";

const Home = () => {
  const [tabValue, setTabValue] = useState("1");
  const navigate = useNavigate();
  const questionsPre = useSelector((state) => state.questions);
  const userauth = useSelector((state) => state.userAuth);
  const userstemp = useSelector((state) => state.users);
  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };
  const questionHandler = (obj) => {
    const temparr = [];
    Object.entries(obj).map(([key, value]) => {
      temparr.push(value);
      return null;
    });
    return temparr;
  };
  const usersHandler = (obj) => {
    const temparr = [];
    Object.entries(obj).map(([key, value]) => {
      temparr.push({
        id: key,
        score: Object.keys(value.answers).length + value.questions.length,
      });
      return null;
    });
    temparr.sort((a, b) => b.score - a.score);
    return temparr;
  };
  if (userauth === null) {
    navigate("/");
  }
  const users = usersHandler(userstemp);
  const questions = questionHandler(questionsPre);
  return (
    <div>
      <Header />
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Unread" value="1" />
              <Tab label="Read" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {questions.map((a) =>
              a.optionOne.votes.includes(userauth) ||
              a.optionTwo.votes.includes(userauth) ? null : (
                <QuestionCard question={a.id} />
              )
            )}
          </TabPanel>
          <TabPanel value="2">
            {questions.map((a) =>
              a.optionOne.votes.includes(userauth) ||
              a.optionTwo.votes.includes(userauth) ? (
                <QuestionCard question={a.id} />
              ) : null
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Home;
