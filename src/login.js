import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { allActions } from "./actions/combinedActions";
import Header from "./components/Header";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const userauth = useSelector((state) => state.userAuth);
  console.log("here is users ---->", users);
  console.log("here is user auth---->", userauth);
  const usersSelectHandle = (obj) => {
    const temparr = [];
    Object.entries(obj).map(([key, value]) => {
      temparr.push({ name: value.name, id: value.id });
      return null;
    });
    console.log(temparr);
    return temparr;
  };
  const usersHandled = usersSelectHandle(users);
  const userSub = (a) => {
    setUser(a.target.value);
  };
  const subButton = () => {
    dispatch(allActions.userAuthActions.setUserAuth(user));
  };
  if (userauth !== null) {
    navigate("/home");
  }

  return (
    <div sx={{ backgroundColor: "#FCF7FF" }}>
      <Header />
      <Box
        sx={{
          minWidth: 120,
          maxWidth: 400,
          margin: "auto",
          marginTop: "400px",
          backgroundColor: "#4A8FE7",
          borderRadius: 4,
          padding: "20px",
        }}
      >
        <h2>Hello Select your user to log in:</h2>
        <form>
          <FormControl fullWidth>
            <InputLabel id="user-select-label">User:</InputLabel>
            <Select
              labelId="user-select"
              id="user-select"
              value={user}
              label="User"
              onChange={userSub}
            >
              {usersHandled.map((a) => (
                <MenuItem value={a.id}>{a.name}</MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              sx={{
                maxWidth: 100,
                marginLeft: "300px",
                background: "#FCF7FF",
                color: "#59D2FE",
              }}
              //   type="submit"
              onClick={subButton}
            >
              Log In
            </Button>
          </FormControl>
        </form>
      </Box>
    </div>
  );
};

export default LoginPage;
