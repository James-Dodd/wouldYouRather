import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Leaderboard from "../components/LeaderBoard";

const LeaderBoard = () => {
  const userstemp = useSelector((state) => state.users);
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
  const users = usersHandler(userstemp);
  return (
    <>
      <Header />
      <div style={{ marign: "auto", marginTop: "100px" }}>
        {users.map((a) => (
          <Leaderboard userId={a.id} />
        ))}
      </div>
    </>
  );
};

export default LeaderBoard;
