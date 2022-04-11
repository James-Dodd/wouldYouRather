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

const Home = () => {
  const [tabValue, setTabValue] = useState("1");
  const navigate = useNavigate();
  const questionsPre = useSelector((state) => state.questions);
  const userauth = useSelector((state) => state.userAuth);
  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };
  const questionHandler = (obj) => {
    const temparr = [];
    Object.entries(obj).map(([key, value]) => {
      temparr.push(value);
      return null;
    });
    console.log(temparr);
    return temparr;
  };
  if (userauth === null) {
    navigate("/");
  }
  const questions = questionHandler(questionsPre);
  console.log("here is questions ---->", questions);
  return (
    <div>
      <Header />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Home" value="1" />
              <Tab label="New Question" value="2" />
              <Tab label="Leaderboard" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {questions.map((a) => (
              <QuestionCard question={a} />
            ))}
          </TabPanel>
          <TabPanel value="2">
            <QuestionsForm />
          </TabPanel>
          <TabPanel value="3">Leaderboard</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Home;
