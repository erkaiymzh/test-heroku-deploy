import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { signUp, error } = useContext(authContext);
  const navigate = useNavigate();
  console.log(signUp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleValues() {
    if (!email || !password) {
      alert("Please fill in!");
      return;
    }
    signUp(email, password, navigate);
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"60vh"}>
      <Typography variant="h3" component="h2">
        Register
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
        Register
      </Button>
      <Typography variant="p" component="h2">
        Already have an account?
      </Typography>
      <Typography
        onClick={() => navigate("/login")}
        variant="p"
        color={"primary"}
        component="h2"
        style={{ cursor: "pointer" }}>
        Sign in
      </Typography>
    </Box>
  );
};

export default RegisterForm;
