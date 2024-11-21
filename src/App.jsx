// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import BackgroundWrapper from './components/BackgroundWrapper';
import Home from './pages/Home';
import SoftwareEngineeringPortfolio from './pages/SoftwareEngineeringPortfolio';
import AudioEngineeringPortfolio from './pages/AudioEngineeringPortfolio';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundWrapper>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-engineering" element={<SoftwareEngineeringPortfolio />} />
          <Route path="/audio-engineering" element={<AudioEngineeringPortfolio />} />
        </Routes>
      </BackgroundWrapper>
    </ThemeProvider>
  );
}

export default App;
