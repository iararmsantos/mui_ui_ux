import React from 'react';
import { Box, Button, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';

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
          fontSize={{lg:30, md:24, sm:18, xs:14}}
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
        <Button 
          endIcon={<EmailIcon/>} sx={{ mr: 3 }} variant='outlined'>Sign Up with</Button>
        <Button color='error' endIcon={<GoogleIcon/>} sx={{ ml: 3 }} variant='contained'>Sign Up with</Button>
      </Box>
    </Box>
  )
}

export default Animation