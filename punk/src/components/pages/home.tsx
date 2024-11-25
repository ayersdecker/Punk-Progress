import '../../App.css';
import { Stack, Container, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


function HomePage() {
  return (
    <Container>
      <body className='Home'>
        <Stack direction="horizontal" gap={3}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita nesciunt sunt laboriosam nihil, ex soluta magni provident, porro a, cupiditate adipisci tenetur inventore dolores? Cum atque ducimus voluptatem labore?</p>
        </Stack>
      </body>
    </Container>
  );
}

export default HomePage;