import React from "react";
import { AppBar, Box, Toolbar, Typography, Button,Alert } from "@mui/material";
import { NavLink } from "react-router-dom";



const Navbar = ({ error }) => { 
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ bgcolor: "#194a7a" }}>
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                UserAuth
              </Typography>
              <Button
                component={NavLink}
                to="/"
                sx={{color:"#d1dbe4", textTransform:"none"}}
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "#476f95" : " " };
                }}
                color="primary"
              >
                Home
              </Button>

              <Button
                component={NavLink}
                to="/contact"
                sx={{color:"#d1dbe4",textTransform:"none"}}
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "#476f95" : " " };
                }}
                color="primary"
              >
                Contact
              </Button>
              <Button
                component={NavLink}
                to="/login/false"
                sx={{color:"#d1dbe4",textTransform:"none"}}
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "#476f95" : " " };
                }}
                color="primary"
              >
                {/* {islogin?"Maccount":"LoginRegister"} */}
                LoginRegister
              </Button>
            </Toolbar>
          </AppBar>
          {error && (
          <Alert severity={error.status ? "success" : ""}>
            {error.msg}
          </Alert>
        )}
        </Box>
    
    </>
  );
};

export default Navbar;
