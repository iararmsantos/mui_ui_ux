import { Box, Button } from '@mui/material'
import React from 'react'
import { CustomizedTypography } from '../Styles'

const index = () => {
  return (
    <Box
        display='flex'
        flexDirection='column'   
    >
        <CustomizedTypography
            fontSize={{lg: 30, md: 24, sm: 18, xs: 14}}
            variant='h3'
            paddingTop={10}
            textAlign='center'
            fontWeight='bold'
        >
            Ready For Any Team Size
        </CustomizedTypography>
        <CustomizedTypography
            fontSize={{lg: 24, md: 20, sm: 16, xs: 12}}
            variant='div'
            textAlign='center'
            padding={4}
        >
            Optimized For Any Team Size
        </CustomizedTypography>
        <Box
            display='flex'
            margin='auto'
            justifyContent='center'
            padding={5}
        >
            <Button                
                variant='contained'
                sx={{ mr: 2, fontSize:{lg: 18, md: 17, sm: 12, xs: 8} }}
            >
                Try CodeEnv For Free</Button>
            <Button                  
                variant='outlined'
                sx={{ ml: 2, fontSize:{lg: 18, md: 17, sm: 12, xs: 8} }}
            >
                Talk To Sales</Button>
        </Box>
    </Box>
  )
}

export default index