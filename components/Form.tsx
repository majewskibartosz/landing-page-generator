import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function Form() {
  const [websiteName, setWebsiteName] = useState('');
  const [skills, setSkills] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${websiteName}</title>
        <style>
          /* Add your CSS here */
        </style>
      </head>
      <body>
        <h1>${websiteName}</h1>
        <h2>Skills</h2>
        <p>${skills}</p>
        <h2>About Me</h2>
        <p>${aboutMe}</p>
      </body>
      </html>
    `;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    window.open(url, '_blank');
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="website-name"
        label="Website Name"
        variant="outlined"
        value={websiteName}
        onChange={(e) => setWebsiteName(e.target.value)}
      />
      <TextField
        id="skills"
        label="Skills"
        variant="outlined"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <TextField
        id="about-me"
        label="About Me"
        variant="outlined"
        multiline
        rows={4}
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
