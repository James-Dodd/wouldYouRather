import React from "react";
import Header from "./components/Header";

const NoMatch = () => {
  return (
    <>
      <Header />
      <h1
        style={{
          margin: "auto",
          justifyContent: "center",
          color: "red",
          fontSize: "50px",
          marginTop: "100px",
        }}
      >
        404 No Page Found
      </h1>
    </>
  );
};

export default NoMatch;
