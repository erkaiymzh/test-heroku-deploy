import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(authContext);
  const navi = useNavigate();
  //   console.log(login);

  function handleValues() {
    if (!email || !password) {
      alert("Please fill in!");
      return;
    }
    login(email, password, navi);
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"60vh"}>
      <Typography variant="h3" component="h2">
        Login
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}

      <TextField
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: "30%", margin: "10px" }}
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
      />

      <TextField
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: "30%", margin: "10px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />

      <Button
        onClick={handleValues}
        style={{ width: "30%", margin: "10px" }}
        variant="contained">
        Login
      </Button>
      <Typography variant="p" component="h2">
        Still no account?
      </Typography>
      <Typography
        onClick={() => navi("/register")}
        variant="p"
        color={"primary"}
        component="h2"
        style={{ cursor: "pointer" }}>
        Sign up
      </Typography>
    </Box>
  );
};

export default LoginForm;
