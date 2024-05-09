import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';
import { Typography } from '@mui/material';

const drawerWidth = 240;

const Sidebar = ({ open, handleDrawerClose }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor:"#212F3D",
          color:"white"
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1 }}>
        <span style={{fontSize:"22px"}}>Weekday</span>
        <IconButton  onClick={handleDrawerClose}>
          <ChevronLeftIcon style={{color:"white"}}/>
        </IconButton>
      </Box>
      <List>
        {['My applied jobs', 'Search jobs', 'Search Salary'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{borderBottom:"1px solid white"}} >
              <ListItemIcon style={{color:"white"}}>
                {index === 0 ? <PermIdentityIcon /> : index === 1 ? <SearchIcon /> : <CurrencyRupeeSharpIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;