"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
export default function Todo() {
 
    return (
        <div className="w-full p-1">
             <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>

                <nav aria-label="secondary mailbox folders">
                    <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText primary="Trash" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Spam" />
                        </ListItemButton>
                    </ListItem>
                    </List>
                </nav>
                </Box>
        </div>
    )
} 