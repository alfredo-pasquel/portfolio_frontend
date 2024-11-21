// src/components/BackgroundWrapper.jsx
import React from 'react';
import { Box } from '@mui/material';
import backgroundImage from '../assets/AP05.jpg'; // Adjust the path as needed

function BackgroundWrapper({ children }) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden', // Prevent scrollbars due to image scaling
        '&::before': {
          content: '""',
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // Ensure the image covers the entire container
          backgroundPosition: 'center', // Center the image
          backgroundAttachment: 'fixed',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
          zIndex: -1,
        },
      }}
    >
      {/* Main content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for readability
          paddingBottom: '20px',
          minHeight: '100vh',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default BackgroundWrapper;
