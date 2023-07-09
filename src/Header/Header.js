import { AppBar, Box, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Animation from '../Animation';
import ToolbarContent from '../Toolbar';
import Drawer from '../Drawer';
import ApiIcon from '@mui/icons-material/Api';

const links = ["Products", "Solutions", "Pricing", "Enterprise"];

const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));
  return (
    <AppBar sx={{ bgcolor: 'transparent', boxShadow: 0, position: "sticky" }}>
      {isMatch ? (
        <Box display='flex'>
          <ApiIcon sx={{color: 'black', padding: 1}}/>
          <Typography sx={{ padding: 0.5, color: 'black'}} variant='h6' fontFamily='fantasy'>CondeEnv</Typography>
          <Drawer links={links}/>
        </Box>
      ) : (
        <Toolbar>
          <ToolbarContent links={links}/>
        </Toolbar>
      )}
      <Animation />
    </AppBar>
  )
}

export default Header