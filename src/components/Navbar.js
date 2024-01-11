import React from "react";
import '../App.css'; // Adjust the path based on your project structure
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton, Paper } from '@mui/material';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
HealthNi        </Typography>
        <Button color="inherit" component={Link} to="/">Breakfast</Button>
        <Button color="inherit" component={Link} to="/food">Food</Button>
        <Button color="inherit" component={Link} to="/drink">Smoothies</Button>
        <Paper
          component="form"
          sx={{
            display: 'flex',
            marginLeft: 2,
            alignItems: 'center',
          }}
        >

        </Paper>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
