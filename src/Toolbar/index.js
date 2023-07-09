import React from 'react';
import { Box, Tabs, Tab, Button, Link } from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';

const ToolbarContent = ({links}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center'
            }}>
            <ApiIcon sx={{ color: 'black' }} />
            <Box>
                <Tabs
                    component={Link}
                    sx={{ textDecoration: 'none' }}
                >
                    {links.map((link, index) => (
                        <Tab
                            sx={{
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                ":hover": {
                                    textDecoration: "underline",
                                    textUnderlineOffset: '5px'
                                }
                            }}
                            key={index}
                            label={link}
                        />
                    ))}
                </Tabs>
            </Box>
            <Box display='flex' marginLeft='auto'>
                <Button sx={{ mr: 2 }} variant='outlined'>Talk to Us</Button>
                <Button sx={{ ml: 2 }} variant='contained'>Try for free</Button>
            </Box>
        </Box>
    )
}

export default ToolbarContent