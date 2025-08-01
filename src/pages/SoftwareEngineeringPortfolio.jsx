// src/pages/SoftwareEngineeringPortfolio.jsx
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

function SoftwareEngineeringPortfolio() {
  const [projects, setProjects] = useState([]);

  // Additional links to display as cards
  const additionalLinks = [
    {
      id: 'github',
      title: 'GitHub Profile',
      description: 'Check out my GitHub repositories and contributions.',
      link: 'https://github.com/alfredo-pasquel',
    },
    {
      id: 'blog',
      title: 'My Blog',
      description: 'Read my articles on software engineering topics.',
      link: 'https://dev.to/alfredo-pasquel',
    },
  ];

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL.replace(/\/+$/, '');

    // Fetch both software and audio projects
    const fetchSoftwareProjects = axios.get(`${apiUrl}/api/software-projects`);
    const fetchAudioProjects = axios.get(`${apiUrl}/api/audio-projects`);

    axios
      .all([fetchSoftwareProjects, fetchAudioProjects])
      .then(
        axios.spread((softwareResponse, audioResponse) => {
          let softwareProjects = softwareResponse.data;
          const audioProjects = audioResponse.data;

          // Find the "Alfredo Pasquel Music" project in audio projects
          const apMusicProject = audioProjects.find(
            (project) => project.title === 'Alfredo Pasquel Music'
          );

          if (apMusicProject) {
            // Insert "Alfredo Pasquel Music" after "Needle Drop"
            const index = softwareProjects.findIndex(
              (project) => project.title === 'Needle Drop'
            );

            if (index !== -1) {
              // Insert after "Needle Drop"
              softwareProjects.splice(index + 1, 0, apMusicProject);
            } else {
              // If "Needle Drop" is not found, add to the end
              softwareProjects.push(apMusicProject);
            }
          }

          setProjects(softwareProjects);
        })
      )
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setProjects([]);
      });
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      <Typography variant="h4" color="textPrimary">
        Software Engineering Portfolio
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
      I’m a software engineer with a passion for building dynamic, creative applications. I specialize in JavaScript, React, Python, Flask and other development tools. I’ve gained strong technical skills in SQL, JSON, and modern web design and implementation. My background in music technology has given me experience with CLI, scripting, and computer architecture, allowing me to approach software challenges with creativity and precision.
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

        {/* Display additional links as cards */}
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

export default SoftwareEngineeringPortfolio;
