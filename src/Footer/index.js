import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <Box
        display='flex'
        flexDirection='column'   
    >
        <Typography
            variant='h3'
            paddingTop={10}
            textAlign='center'
        >
            Ready For Any Team Size
        </Typography>
        <Typography
            variant='div'
            textAlign='center'
            padding={4}
        >
            Optimized For Any Team Size
        </Typography>
        <Box
            display='flex'
            margin='auto'
            justifyContent='center'
            padding={5}
        >
            <Button 
                variant='contained'
                sx={{ mr: 2 }}
            >
                Try CodeEnv For Free</Button>
            <Button 
                variant='outlined'
                sx={{ ml: 2 }}
            >
                Talk To Sales</Button>
        </Box>
    </Box>
  )
}

export default index