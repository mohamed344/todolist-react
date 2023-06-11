import React, { useState } from "react";
import { Stack, Button, TextField, InputLabel } from "@mui/material";
import API from "../api";

function Login() {
  const [formData, setFormData] = useState({
        email: "",
        password: ""
  });

  const LoginForm  = async (e) => {
        e.preventDefault()
    try {
      const response = await API.post("/api/users/login", formData);
        console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: [e.target.value]})
  }

  return (
    <Stack spacing={2}>
      <InputLabel htmlFor="outlined-adornment-email" sx={{ color: "#DAD9D9" }}>
        Email
      </InputLabel>
      <TextField
        name="email"
        id="outlined-basic"
        label="Enter your email"
        color="success"
        variant="outlined"
        InputProps={{
          style: {
            color: "#fff",
            fontSize: "16px",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#DAD9D9",
            fontSize: "16px",
          },
        }}
        value={formData.email}
        onChange={handleChange}
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
          },
        }}
        InputLabelProps={{
          style: {
            color: "#DAD9D9",
            fontSize: "16px",
          },
        }}
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="success"
        onClick={LoginForm}
      >
        Log In
      </Button>
    </Stack>
  );
}

export default Login;
