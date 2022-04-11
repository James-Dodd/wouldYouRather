import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
// import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
const Header = () => {
  const users = useSelector((state) => state.users);
  const loggedinuser = useSelector((state) => state.userAuth);
  const user = loggedinuser !== null ? users[loggedinuser] : null;

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
        <CardHeader
          avatar={<Avatar alt={user.name} src={user.avatarURL} />}
          title={user.name}
        />
      ) : null}
    </div>
  );
};

export default Header;
