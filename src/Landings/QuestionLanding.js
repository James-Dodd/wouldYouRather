import React from "react";
import QuestionCard from "../components/Cards/QuestionCard";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const QuestionLanding = () => {
  const { questionId } = useParams();
  return (
    <>
      <Header />
      <div style={{ marign: "auto", marginTop: "100px" }}>
        <QuestionCard question={questionId} home={false}/>
      </div>
    </>
  );
};

export default QuestionLanding;
