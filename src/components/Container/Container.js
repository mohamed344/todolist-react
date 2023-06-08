import React from 'react'
import { Stack } from '@mui/material';


const Container = (props) => {

  return (
    <Stack sx={{
        width: '100vh',
        backgroundColor: 'var(--color-darkest)',
        borderRadius: 'var(--border-radius-primary)',
        padding: 'calc(var(--distance-primary) / 2) var(--padding-primary)'
    }}>
        {props.children}
    </Stack>
  )
}

export default Container;
