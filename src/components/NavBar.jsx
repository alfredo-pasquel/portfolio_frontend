// src/components/NavBar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Your preferred name styling */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Alfredo Pasquel
          </Link>
        </Typography>

        {/* Navigation buttons */}
        <Button color="inherit" component={Link} to="/software-engineering">
          Software
        </Button>
        <Button color="inherit" component={Link} to="/audio-engineering">
          Audio
        </Button>

        {/* LinkedIn button */}
        <Button
          color="inherit"
          href="https://www.linkedin.com/in/alfredo-pasquel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
