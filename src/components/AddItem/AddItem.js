import React from 'react'
import './AddItem.css'
import {Button,TextField, Stack} from '@mui/material'

const AddItem = ({input, setInput, handleSubmit}) => {

    const handleKeypress = (e) => {
        if(e.key === 'Enter'){
            handleSubmit();
        }
    }

    return (
        <>
            <Stack spacing={2} direction={'row'}>
                <TextField
                    value={input}
                    id="outlined-basic"
                    label="Enter your task"
                    color='success'
                    variant="outlined"
                    onKeyPress={handleKeypress}
                    onChange={(e) => {setInput(e.target.value)}}
                    sx={{
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                        color: '#fff',
                        width: '70%',
                    }}
                    InputProps={{
                        style: {
                            color: '#fff',
                            fontSize: '16px',
                        },
                        classes: {
                            root: 'success-root',
                            focused: 'success-focused',
                            notchedOutline: 'success-notchedOutline',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: "#DAD9D9",
                            fontSize: '16px',
                        },
                    }}
                />
                <Button variant='contained'
                sx={{
                    width: '30%',
                    backgroundColor: '#02943a',
                    '&:hover': {
                        backgroundColor: '#35af64',
                        letterSpacing: '2px',
                        transition: '0.5s',
                    },
                }} onClick={handleSubmit}>Add a task</Button>
            </Stack>
        </>
    )

}

export default AddItem;
