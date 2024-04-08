import React from 'react';
import { Typography, Button, Grid } from '@mui/material'; // Import Material-UI components
import bac from '../images/bac.jpg'
import { Link } from 'react-router-dom';

const Homee = () => {
  // Component logic
  return (
    <div style={{ 
        backgroundImage: `url(${bac})`, // Set background image
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        minHeight: '100vh', // Ensure full height
        display: 'flex', // Use flexbox for centering content vertically
        flexDirection: 'column', // Stack content vertically
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
      }}>
      {/* Title Typography */}
      <Typography variant="h1" component="h1" align="center" sx={{ fontFamily: 'Oswald', mb: 3, marginTop: '-150px' }}>
        HealthNi
      </Typography>

      {/* Brand Motto */}
      <Typography variant="body1" align="center" sx={{ mb: 3 }}>
        Eat healthier Live Better.
      </Typography>

      {/* Three Buttons */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" sx={{ width: '200px' }} component={Link} to="/breakfast" >
            Breakfast Foods
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" sx={{ width: '200px' }} component={Link} to="/food">
            Lunch/Dinner Foods
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" sx={{ width: '200px' }} component={Link} to="/drink">
            Smoothies
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homee;
