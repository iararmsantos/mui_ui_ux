import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import React,  {useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Index = ({links}) => {
    const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
    <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
            {links.map((item, index) => (
                <ListItemButton onClick={() => setOpen(false)} key={index}>
                    <ListItemText>{item}</ListItemText>
                </ListItemButton>
            ))}
        </List>
    </Drawer>
    <IconButton sx={{ ml: 'auto' }} onClick={() => setOpen(true)}>
        <MenuRoundedIcon color='white'/>
    </IconButton>
    </React.Fragment>
  )
}

export default Index