import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Avatar from "@mui/material/Avatar";
import { allActions } from "../../actions/combinedActions";
import { useSelector, useDispatch } from "react-redux";
import { VictoryLabel, VictoryLegend, VictoryPie } from "victory";
import { useNavigate } from "react-router-dom";
import { saveQuestionAnswer } from "../../utils/dataHandler";
import { QUESTION_DETAILS } from "../../constants/routingConstants";

const QuestionCard = (question) => {
  const users = useSelector((state) => state.users);
  const loggedinuser = useSelector((state) => state.userAuth);
  const questionTemp = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quest = questionTemp[question.question];
  const voteHandler = (questId) => {
    if (questId === "1") {
      dispatch(
        allActions.questionActions.voteAdder(
          loggedinuser,
          "optionOne",
          quest.id
        )
      );
      dispatch(
        allActions.usersActions.addAnswerToUser(
          loggedinuser,
          "optionTwo",
          quest.id
        )
      );
      saveQuestionAnswer(loggedinuser, "optionTwo", quest.id);
    } else if (questId === "2") {
      dispatch(
        allActions.questionActions.voteAdder(
          loggedinuser,
          "optionTwo",
          quest.id
        )
      );
      dispatch(
        allActions.usersActions.addAnswerToUser(
          loggedinuser,
          "optionTwo",
          quest.id
        )
      );
      saveQuestionAnswer(loggedinuser, "optionTwo", quest.id);
    }
  };
  const handleClick = () => {
    navigate(QUESTION_DETAILS.split(":")[0] + quest.id);
  };
  const data =
    quest == null
      ? []
      : [
          {
            x: "1.",
            y:
              quest.optionOne.votes.length >= 1
                ? quest.optionOne.votes.length
                : 0,
          },
          {
            x: "2.",
            y:
              quest.optionTwo.votes.length >= 1
                ? quest.optionTwo.votes.length
                : 0,
          },
        ];

  useEffect(() => {
    if (quest == null) {
      navigate("*");
    }
  });

  return (
    <Card
      sx={{
        margin: "auto",
        border: "3px",
        borderColor: "#59D2FE",
        borderRadius: "10px",
        borderStyle: "dashed",
        backgroundColor: "#59D2FE",
        maxWidth: "850px",
        marginBottom: "20px",
        padding: "8px",
      }}
    >
      {quest == null ? null : (
        <>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "green" }}>
                {users[quest.author].name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </Avatar>
            }
            title={`author: ${users[quest.author].name}`}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="subtitle1" color="grey" component="div">
              would you rather:
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Typography variant="subtitle1" color="grey" component="div">
                Option One: {quest.optionOne.text}{" "}
                {quest.optionOne.votes.includes(loggedinuser) ||
                quest.optionTwo.votes.includes(loggedinuser)
                  ? `/${" "}${
                      quest.optionOne.votes.length
                    }${" "}people chose this option`
                  : ""}
              </Typography>
              <Typography variant="subtitle1" color="grey" component="div">
                {quest.optionOne.votes.includes(loggedinuser) ||
                quest.optionTwo.votes.includes(loggedinuser)
                  ? `${" "}:  ${quest.optionOne.votes.map(
                      (a) => `${users[a].name} `
                    )}`
                  : ""}
              </Typography>
              {quest.optionOne.votes.includes(loggedinuser) ||
              quest.optionTwo.votes.includes(loggedinuser) ? null : (
                <IconButton aria-label="upVote">
                  <Chip
                    label="Vote"
                    onClick={() => {
                      voteHandler("1");
                    }}
                    icon={<CheckCircleIcon style={{ fill: "#00FF08" }} />}
                  />
                </IconButton>
              )}
            </Box>
            <Typography variant="subtitle1" color="grey" component="div">
              {" "}
              OR{" "}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Typography variant="subtitle1" color="grey" component="div">
                Option Two: {quest.optionTwo.text}{" "}
                {quest.optionOne.votes.includes(loggedinuser) ||
                quest.optionTwo.votes.includes(loggedinuser)
                  ? `/${" "}${
                      quest.optionTwo.votes.length
                    }${" "}people chose this option`
                  : ""}
              </Typography>
              <Typography variant="subtitle1" color="grey" component="div">
                {quest.optionOne.votes.includes(loggedinuser) ||
                quest.optionTwo.votes.includes(loggedinuser)
                  ? `${" "}:  ${quest.optionTwo.votes.map(
                      (a) => `${users[a].name} `
                    )}`
                  : ""}
              </Typography>
              {quest.optionOne.votes.includes(loggedinuser) ||
              quest.optionTwo.votes.includes(loggedinuser) ? null : (
                <IconButton aria-label="upVote">
                  <Chip
                    label="Vote"
                    onClick={() => {
                      voteHandler("2");
                    }}
                    icon={<CheckCircleIcon style={{ fill: "#00FF08" }} />}
                  />
                </IconButton>
              )}
            </Box>
            {quest.optionOne.votes.includes(loggedinuser) ||
            quest.optionTwo.votes.includes(loggedinuser) ? (
              <>
                <Box sx={{ minHeight: "500px" }}>
                  <VictoryPie
                    width={300}
                    colorScale={["cyan", "navy"]}
                    data={data}
                    height={200}
                    cornerRadius={5}
                    labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
                  />
                </Box>
                <VictoryLegend
                  x={125}
                  y={10}
                  height={60}
                  orientation="horizontal"
                  style={{
                    border: { stroke: "black" },
                    height: 100,
                    width: 100,
                  }}
                  colorScale={["cyan", "navy"]}
                  data={[{ name: "Option One" }, { name: "Option Two" }]}
                />
              </>
            ) : null}
            {question.home === false ? null : (
              <Button
                variant="contained"
                onClick={handleClick}
                sx={{ margin: "auto", float: "right" }}
              >
                Details
              </Button>
            )}
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default QuestionCard;
