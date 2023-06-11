import React, { useState } from 'react'
import API from "../api";
import {Button, InputLabel, Stack, TextField } from '@mui/material';

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const RegisterForm = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post("/api/users/register", formData);
              console.log(response.data);
        }catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <Stack spacing={2}>
        <InputLabel htmlFor="outlined-adornment-email" sx={{ color: "#DAD9D9" }}>
            UserName
        </InputLabel>
        <TextField
            id="outlined-username"
            label="Enter your username"
            name='username'
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
            value={formData.username}
            onChange={handleChange}
            />
            <InputLabel htmlFor="outlined-adornment-email" sx={{ color: "#DAD9D9" }}>
            Email
        </InputLabel>
        <TextField
            id="outlined-basic"
            label="Enter your email"
            name='email'
            type='email'
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
            name='password'
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
            type='submit'
            variant="contained"
            color="success"
            onClick={RegisterForm}
        >
            Register
        </Button>
    </Stack>
    )
}

export default Register;
