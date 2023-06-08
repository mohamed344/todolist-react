import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function DenseAppBar() {
  return (
        <Stack sx={{marginBottom: 2}}>
            <AppBar position="static"
                sx={{
                    backgroundColor: 'var(--color-darkest)',
                    borderRadius: 2
                }}>
                <Toolbar variant="dense" sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant="h5" color="inherit" component="div">
                        Todo List
                    </Typography>
                </Toolbar>
            </AppBar>
        </Stack>
  );
}