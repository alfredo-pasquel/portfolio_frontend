// src/pages/Home.jsx
import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material'; // Added Button
import profileImage from '../assets/AP07.jpg';

function Home() {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={4}
        sx={{ 
          marginTop: '10px',
          marginBottom: '0px'
        }}
      >
        <Grid item>
          <Box
            component="img"
            src={profileImage}
            alt="Alfredo Pasquel"
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="subtitle1" 
            align="center"
            sx={{
              fontSize: 25,
              marginTop: '0px',
              marginBottom: '10px'
             }}>
            Alfredo Pasquel
          </Typography>

          <Typography 
            variant="subtitle1" 
            align="center"
            sx={{ 
              marginTop: '0px',
              marginBottom: '10px'
             }}
            >
            Hi, I’m Alfredo Pasquel — a post-production mixer with over a decade of experience in high-end film and television scoring. I’ve mixed music for major Hollywood productions, including Grammy and Emmy-winning projects, as well as contributed to Oscar winning films. I have worked at and led engineering at world-class studio facilities in Los Angeles. 
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center"
            sx={{ 
              marginTop: '10px',
              marginBottom: '10px'
             }}
            >
            My specialty lies in crafting emotionally impactful, technically precise content across both linear and non-linear formats, from orchestral scores to immersive Dolby Atmos records. 
          </Typography>  
          <Typography 
            variant="subtitle1" 
            align="center"
            sx={{ 
              marginTop: '10px',
              marginBottom: '10px'
             }}
            >
            In addition to my work in post-production, I’ve recently completed a rigorous software engineering bootcamp to expand my technical capabilities. I now have the tools to engage with the technical side of modern media in new and meaningful ways — adding another dimension to my creative practice. 
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center"
            sx={{ 
              marginTop: '10px',
              marginBottom: '10px'
             }}
            >
            I own and operate my own company and am currently working on several large-scale projects. My mission is to elevate storytelling through sound — with the precision of an engineer and the instinct of a musician.
          </Typography>

        </Grid>
        {/* Added Contact Button */}
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            href="mailto:info@alfredopasquel.com"
          >
            Contact
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
