import '../App.css';
import { Stack, Container, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


function HomePage() {
  return (
    <Container>
      <body className='Home'>
        <Stack gap={3}>
          <h2 style={{ textShadow: '0 0 5px orange' }}>About Me</h2>
          <p>&emsp;My name is Decker Ayers, and I am a dedicated father of three from Upstate New York. Currently, I work remotely as a Mobile Application Developer for a prominent National News Organization. My professional journey began at the Rochester Institute of Technology, where I earned an Associate in Applied Science (AAS) degree in Mobile Application Development with a concentration in User Experience Design.</p>
          <p>&emsp;From a young age, I was captivated by technology and the natural world. Growing up, I spent countless hours exploring the woods near my neighborhood, constructing forts and imagining future trails to hike. This love for discovery extended to technology when, in sixth grade, I attended a summer camp at RIT and built my first computer. That experience sparked a lifelong passion for building, creating, and innovating.</p>
          <p>&emsp;Throughout my youth, I found ways to express my ideas using CAD modeling, video production, and diagramming tools, but it wasn’t until I enrolled in a coding course as an adult that my true career path came into focus. Learning to code revolutionized my approach to technology and set me on a trajectory that combined my creativity, technical skills, and passion for user-centered design.</p>
          <p>&emsp;Beyond my professional endeavors, I have actively contributed to my community through various volunteer roles. I’ve been involved with the Boy Scouts of America, worked with disability-focused nonprofits, and participated in diverse community improvement projects. These experiences reflect my commitment to making a positive impact on those around me.</p>
          <p>&emsp;In my free time, I balance my love for technology with the most important part of my life, my family. My journey continues to be shaped by a deep curiosity, a drive to create, and a dedication to leaving the world a little better than I found it.</p>
        </Stack>
      </body>
    </Container>
  );
}

export default HomePage;