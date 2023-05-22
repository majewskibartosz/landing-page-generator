import { Button, TextField, Box, Grid } from '@mui/material';
import { useState } from 'react';

export default function Form() {
  const [websiteName, setWebsiteName] = useState('');
  const [skills, setSkills] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [email, setEmail] = useState(''); // Add this line

  const handleSubmit = (event) => {
    event.preventDefault();

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${websiteName}</title>
        <link href="/tailwind.css" rel="stylesheet">
      </head>
      <body class="bg-gray-200 text-gray-800">
        <h1 class="text-4xl">${websiteName}</h1>
        <h2 class="text-2xl">Skills</h2>
        <p>${skills}</p>
        <h2 class="text-2xl">About Me</h2>
        <p>${aboutMe}</p>
        <h2 class="text-2xl">Email</h2>
        <p>${email}</p>
      </body>
      </html>
    `;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    window.open(url, '_blank');
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        mt: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="website-name"
            label="Website Name"
            variant="outlined"
            fullWidth
            required
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="skills"
            label="Skills"
            variant="outlined"
            fullWidth
            required
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="about-me"
            label="About Me"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
