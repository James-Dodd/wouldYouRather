import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { HOME, LEADERBOARD, ADD_QUESTION } from "../constants/routingConstants";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { allActions } from "../actions/combinedActions";
const Header = () => {
  const location = useLocation();
  const [tabValue, setTabValue] = useState(location.pathname);
  const users = useSelector((state) => state.users);
  const loggedinuser = useSelector((state) => state.userAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = loggedinuser !== null ? users[loggedinuser] : null;
  const handleChange = (e, newValue) => {
    setTabValue(newValue);
    navigate(newValue);
  };

  return (
    <div
      style={{
        backgroundColor: "#59D2FE",
        paddingTop: "10px",
        paddingBottom: "20px",
        maxHeight: "100px",
      }}
    >
      <h1
        style={{
          margin: "auto",
          marginTop: "10px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        Would You Rather
      </h1>
      {loggedinuser !== null ? (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "green" }}>
                  {user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </Avatar>
              }
              title={user.name}
              style={{ marginLeft: "10px" }}
            />
            <Button
              onClick={() =>
                dispatch(dispatch(allActions.userAuthActions.setUserAuth(null)))
              }
              varient="contained"
              style={{ color: "white" }}
            >
              Log Out
            </Button>
          </div>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Home" value={HOME} />
                <Tab label="New Question" value={ADD_QUESTION} />
                <Tab label="Leaderboard" value={LEADERBOARD} />
              </TabList>
            </Box>
          </TabContext>
        </>
      ) : null}
    </div>
  );
};

export default Header;
