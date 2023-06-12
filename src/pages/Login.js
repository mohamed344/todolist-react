import React, { useState } from "react";
import { Stack, Button, TextField, InputLabel } from "@mui/material";
import API from "../api";

function Login() {
  const [formData, setFormData] = useState({
        email: "",
        password: ""
  });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

  const validateForm = () => {
        const {email, password } = formData;
        const errors = {};

        if(!email){
            errors.email = "Email is required";
        }
        else if(errors.email !== email){
            errors.email = "Email is invalid";
        }

        if(!password){
            errors.password = "Password is required";
        }
        else if(errors.password !== password){
            errors.password = "Password is invalid";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
  }

  const LoginForm  = async (e) => {
        e.preventDefault()
        if(validateForm()) {
            try {
                const response = await API.post("/api/users/login", formData);
                console.log(response.data);
            }catch (error) {
                console.error(error);
            }
        }
    };

  const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: [e.target.value]});
        setErrors({ ...errors, [e.target.name]: "" });
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
        error={!!errors.email}
        helperText={errors.email}
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
        name="password"
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
        error={!!errors.password}
        helperText={errors.password}
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
