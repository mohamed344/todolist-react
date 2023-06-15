import React, { useState } from 'react'
import API from "../api";
import {Button, InputLabel, Stack, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";


function Register() {
    const navigate  = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "12345678"
    })
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: ""
    });

    const validateForm = () => {
        const {username, email, password } = formData;
        const errors = {};
        if(!username){
            errors.username = "username is required";
        }

        if(!email){
            errors.email = "Email is required";
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = "Email is invalid";
        }
        if(!password){
            errors.password = "Password is required";
        }else if(password.length > 8){
            errors.password = "Password must be at least 8 characters long.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const RegisterForm = async (e) => {
        e.preventDefault();
        if(validateForm()) {
            try {
                const response = await API.post("/api/users/register", formData);
                const token = response.data.token;
                localStorage.setItem("token", token);
                console.log(response.data);
                navigate("/tasks");
            }catch (error) {
                console.error(error);
            }
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
        setErrors({ ...errors, [e.target.name]: "" });
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
                type='text'
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
                error={!!errors.username}
                helperText={errors.username}
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
                error={!!errors.password}
                helperText={errors.password}
            />
            <Button
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
