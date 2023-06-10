import React from "react";
import { Stack, Button, TextField, InputLabel } from "@mui/material";
import API from "../api";

function Login() {

    const handleLogin = async () => {
        try {
          const response = await API.post('/api/users/login', {
            username: '',
            password: ''
          });
          // Process the response, e.g., save authentication token, redirect to dashboard, etc.
          console.log(response.data);
        } catch (error) {
          // Handle error, e.g., display error message, clear form fields, etc.
          console.error(error);
        }
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
          classes: {
            root: "success-root",
            focused: "success-focused",
            notchedOutline: "success-notchedOutline",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#DAD9D9",
            fontSize: "16px",
          },
        }}
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
        type={"password"}
        InputProps={{
          style: {
            color: "#fff",
            fontSize: "16px",
            width: "70%",
          },
          classes: {
            root: "success-root",
            focused: "success-focused",
            notchedOutline: "success-notchedOutline",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#DAD9D9",
            fontSize: "16px",
          },
        }}
      />
      <Button variant="contained" color="success" sx={{ width: "70%" }} onClick={handleLogin}>
        Log In
      </Button>
    </Stack>
  );
}

export default Login;
