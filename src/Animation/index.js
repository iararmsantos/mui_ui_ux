import React from 'react';
import { Box, Button, Typography} from '@mui/material'

const Animation = () => {
  return (
    <Box width='100%' height='100vh'>
        <video 
          width='100%' 
          height='70%' 
          src='/video.mp4' 
          autoPlay 
          loop
          muted
          playsInline
        >
        </video> 
        <Box display='flex' width='100%'>
            <Typography 
                margin='auto' 
                variant='h4' 
                color='black' 
                textAlign='center'
            > 
            Build Your Softwares Free And With Top Notch Quality                  
            </Typography>
        </Box>     
        <Box 
          width='100%' 
          display='flex' 
          justifyContent='center' 
          margin='auto' 
          marginTop={5}
        >
          <Button sx={{mr: 3}} variant='outlined'>Sign Up with Email</Button>
          <Button sx={{ml: 3}} variant='contained'>Sign Up with Google</Button>
        </Box>          
    </Box>
  )
}

export default Animation