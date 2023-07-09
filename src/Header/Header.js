import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Animation from '../Animation';
import ToolbarContent from '../Toolbar';
import Drawer from '../Drawer';
import ApiIcon from '@mui/icons-material/Api';
import { CustomizedTypography } from '../Styles';

const links = ["Products", "Solutions", "Pricing", "Enterprise"];

const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));
  return (
    <AppBar sx={{ bgcolor: 'transparent', boxShadow: 0, position: "sticky" }}>
      {isMatch ? (
        <Box display='flex'>
          <ApiIcon sx={{color: 'black', padding: 1}}/>
          <CustomizedTypography sx={{ padding: 0.5, color: 'black'}} variant='h6' fontFamily='fantasy'>CondeEnv</CustomizedTypography>
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