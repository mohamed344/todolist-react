    import React from 'react'
    import './AddItem.css'
    import API from '../../api'
    import {Button,TextField, Stack} from '@mui/material'

    const AddItem = ({input, setInput}) => {

    const handleSubmit = async () => {
        try {
        const response = await API.post('/api/users/register', { title: input });
        console.log(response.data);
        setInput('');
        } catch (error) {
        console.error(error);
        }
    };

    // const updateTask = async(id) => {
    //   try{
    //     const response = await API.put(`/api/tasks/update/${id}`, { title: input });
    //     console.log(response.data); 
    //     setInput(response.data.title);
    //       setTodos((prev) => [...prev, input]);
    //       console.log('The task has been updated');
    //   }catch(error){
    //     console.log(error);
    //   }
    // }

    const handleKeypress = (e) => {
        if(e.key === 'Enter'){
            handleSubmit();
        }
    }
        return (
        <>
            <Stack spacing={2} direction={'row'}>
                <TextField
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
                        color: '#02943a',
                        fontSize: '16px',
                        },
                    }}
                />
                {/* <input type='text' value={input} className='todoinpt' /> */}
                {/* <button className='todobtn' disabled={input.length === 0}  onClick={handleSubmit}>Add a task</button> */}
                <Button variant='contained'
                sx={{
                    width: '30%',
                    backgroundColor: '#02943a',
                    '&:hover': {
                        backgroundColor: '#35af64', // Hover background color
                    },
                }}>Add a task</Button>
            </Stack>
        </>
        )

    }

    export default AddItem;
