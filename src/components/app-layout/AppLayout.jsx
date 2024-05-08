import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const drawerWidth = 240;

const AppLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box >
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop:10,
          paddingInline:6,
          transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
          marginLeft: open ? `${drawerWidth}px` : "0px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
