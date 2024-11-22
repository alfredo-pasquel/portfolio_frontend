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
        Having recently graduated from an intensive coding bootcamp specializing in JavaScript with React and Python with Flask, I have built a strong foundation in modern programming languages and frameworks. My technical expertise also includes SQL, SQLAlchemy, JSON, HTML, CSS, and other essential technologies that equip me to develop robust and dynamic applications. With a lifelong tech mindset and an engineering approach to problem-solving, I bring a unique perspective shaped by my background in high-level music technology and engineering. During my years working alongside Hans Zimmer and others, I gained hands-on experience with command line interfaces, embedded systems, computer architecture and design, basic scripting, and various development tools. This blend of experiences allows me to approach software engineering challenges with creativity and precision, and I am excited to contribute my skills as a software engineer.
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
