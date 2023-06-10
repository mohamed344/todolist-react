import React, { useState } from "react";
import { Stack, Button, TextField, InputLabel } from "@mui/material";
import API from "../api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await API.post("/api/users/login", { username, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Stack spacing={2}>
      <InputLabel htmlFor="outlined-adornment-email" sx={{ color: "#DAD9D9" }}>
        Email
      </InputLabel>
      <TextField
        id="outlined-basic"
        label="Enter your email"
        color="success"
        variant="outlined"
        InputProps={{
          style: {
            color: "#fff",
            fontSize: "16px",
            width: "70%",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#DAD9D9",
            fontSize: "16px",
          },
        }}
        value={username}
        onChange={handleUsernameChange}
      />
      <InputLabel
        htmlFor="outlined-adornment-password"
        sx={{ color: "#DAD9D9" }}
      >
        Password
      </InputLabel>
      <TextField
        id="standard-adornment-password"
        label="Enter your password"
        color="success"
        type="password"
        InputProps={{
          style: {
            color: "#fff",
            fontSize: "16px",
            width: "70%",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#DAD9D9",
            fontSize: "16px",
          },
        }}
        value={password}
        onChange={handlePasswordChange}
      />
      <Button
        variant="contained"
        color="success"
        sx={{ width: "70%" }}
        onClick={handleLogin}
      >
        Log In
      </Button>
    </Stack>
  );
}

export default Login;
