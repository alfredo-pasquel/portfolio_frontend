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
        sx={{ marginTop: '50px' }}
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
          <Typography variant="h3" align="center">
            Alfredo Pasquel
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            Welcome to my portfolio. I’m Alfredo Pasquel, an experienced audio and software engineer with a deep passion
            for innovation. My background includes designing, building, and maintaining complex
            systems, with a unique focus on multimedia creation. I’ve worked on music production for
            Hollywood films and led engineering at a cutting-edge studio in LA, which has given me
            specialized expertise in both linear and non-linear media. Recently, I’ve further honed
            my skills through a rigorous software engineering bootcamp. My goal is to push the
            boundaries of technology, creating applications that redefine what’s possible.
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
