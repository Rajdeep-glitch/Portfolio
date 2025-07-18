// Node.js script to generate project images using OpenAI DALL-E API
// Usage: node generate-project-images.js
// 1. Add your OpenAI API key below
// 2. Run this script from your project root

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY_HERE'; // <-- Replace with your key

const projects = [
  {
    name: 'Backend_VotingApp',
    prompt: "A modern, creative cover image for a project called 'Backend_VotingApp'. Description: A backend system for a digital voting application. Show secure servers, digital ballots, and a sense of trust and technology. Render in a clean, tech-inspired style."
  },
  {
    name: 'frontend_Agriculture',
    prompt: "A vibrant, user-friendly cover image for a project called 'frontend_Agriculture'. Description: A web interface for agriculture management or information. Show crops, fields, and digital dashboards, with a green and natural color palette. Render in a flat, minimalistic style."
  }
  // Add more projects here as needed
];

const outputDir = path.join(__dirname, 'public', 'projects');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateImage(project) {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: project.prompt,
      n: 1,
      size: '512x256'
    })
  });
  if (!response.ok) {
    console.error(`Failed to generate image for ${project.name}:`, await response.text());
    return;
  }
  const data = await response.json();
  const imageUrl = data.data[0].url;
  const imageRes = await fetch(imageUrl);
  const buffer = await imageRes.buffer();
  const outPath = path.join(outputDir, `${project.name}.png`);
  fs.writeFileSync(outPath, buffer);
  console.log(`Saved image for ${project.name} to ${outPath}`);
}

(async () => {
  for (const project of projects) {
    await generateImage(project);
  }
  console.log('All images generated!');
})(); 