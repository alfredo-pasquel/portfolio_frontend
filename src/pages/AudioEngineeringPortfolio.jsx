// src/pages/AudioEngineeringPortfolio.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Link as MuiLink,
} from '@mui/material';

function AudioEngineeringPortfolio() {
  const [projects, setProjects] = useState([]);

  // Additional link to display as a card
  const additionalLinks = [
    {
      id: 'imdb',
      title: 'IMDb Profile',
      description: 'View my professional credits on IMDb.',
      link: 'https://www.imdb.com/name/nm6419909/?ref_=ext_shr_lnk',
    },
  ];

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL.replace(/\/+$/, '');
    axios
      .get(`${apiUrl}/api/audio-projects`)
      .then((response) => {
        console.log('API Response:', response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching audio projects:', error);
        setProjects([]);
      });
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      <Typography variant="h4" color="textPrimary">
        Audio Engineering Portfolio
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
        With over 15 years of experience as an audio engineer, I graduated at the top of my class in Recording Arts, which set the foundation for a distinguished career in the industry. I spent five years working alongside Hans Zimmer, contributing to Oscar-winning scores and performances, and an additional two years with Ben Wallfisch, further honing my expertise in audio production. My portfolio extends to international broadcast television, where I have mixed, recorded, and edited high-profile projects. Notably, I have been involved in Grammy-winning collaborations with artists like Jacob Collier and have worked on Oscar-nominated pieces with Hans Zimmer. Beyond my audio engineering skills, I have designed, built, and maintained numerous high-end Hollywood audio production studios and suites, demonstrating a deep understanding of the technical and acoustic intricacies of studio environments. Currently, I offer my services as a freelance audio engineer, bringing a wealth of experience and a commitment to excellence to every project.
      </Typography>
      <Typography variant="h6" color="textPrimary" sx={{ marginTop: '20px' }}>
        Projects:
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  <MuiLink href={project.link} target="_blank" rel="noopener" color="inherit">
                    {project.title}
                  </MuiLink>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Display additional link as a card */}
        {additionalLinks.map((link) => (
          <Grid item xs={12} md={6} key={link.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  <MuiLink href={link.link} target="_blank" rel="noopener" color="inherit">
                    {link.title}
                  </MuiLink>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {link.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AudioEngineeringPortfolio;
