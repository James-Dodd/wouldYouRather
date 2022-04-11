import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "./actions/combinedActions";
import LoginPage from "./login";
import "./App.css";
import Home from "./Home";
import QuestionLanding from "./Landings/QuestionLanding";
import {
  SRC,
  HOME,
  QUESTION_DETAILS,
  LEADERBOARD,
  ADD_QUESTION,
} from "./constants/routingConstants";
import LeaderBoard from "./Landings/LeaderBoard";
import QuestionsForm from "./components/QuestionsForm";
import NoMatch from "./NoMatch";

const App = () => {
  const loggedInUser = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  dispatch(handleInitialData());
  return (
    <>
      {loggedInUser === null ? (
        <LoginPage />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={QUESTION_DETAILS} element={<QuestionLanding />} />
            <Route path={LEADERBOARD} element={<LeaderBoard />} />
            <Route path={ADD_QUESTION} element={<QuestionsForm />} />
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
