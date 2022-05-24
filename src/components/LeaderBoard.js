import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const Leaderboard = (userId) => {
  const users = useSelector((state) => state.users);
  return (
    <Card
      key={userId.userId}
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
      <CardHeader
        avatar={
          <Avatar
          key={userId.userId}
            src={`${process.env.PUBLIC_URL}${users[userId.userId].avatarURL}`}
          />
        }
        title={`author: ${users[userId.userId].name}`}
      />
      <CardContent>
        <Typography>
          questions posted: {users[userId.userId].questions.length}
        </Typography>
        <Typography>
          questions answered: {Object.keys(users[userId.userId].answers).length}
        </Typography>
        <Typography>
          total score:{" "}
          {Object.keys(users[userId.userId].answers).length +
            users[userId.userId].questions.length}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
