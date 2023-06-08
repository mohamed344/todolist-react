import React from 'react'
import {Stack, Button, TextField, InputLabel} from "@mui/material"


function Login() {

    return (
        <>
            <Stack spacing={2}>
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <TextField id="outlined-basic" label="Enter your email" color='success' variant="outlined" />
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <TextField
                    id="standard-adornment-password"
                    label="Enter your password"
                    color='success'
                    type={'password'}
                />
                <Button variant='contained' color='success'>Log In</Button>
            </Stack>
        </>
    )
}

export default Login;
