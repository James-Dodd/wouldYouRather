import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {handleInitialData} from "./actions/combinedActions";
import LoginPage from "./login";
import "./App.css";
import Home from "./Home";

function App() {
  const dispatch = useDispatch();
  dispatch(handleInitialData());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
