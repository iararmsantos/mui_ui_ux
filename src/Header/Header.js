import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';
import Animation from '../Animation';
import ToolbarContent from '../Toolbar';


const Header = () => {
  return (
    <AppBar sx={{bgcolor: 'transparent', boxShadow: 0, position: "sticky"}}>
        <Toolbar>
            <ToolbarContent/>
        </Toolbar>
        <Animation/>        
    </AppBar>
  )
}

export default Header