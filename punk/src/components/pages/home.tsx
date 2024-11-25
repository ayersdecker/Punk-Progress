import '../../App.css';
import { Stack, Container, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


function HomePage() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <Container>
    <body className='Home'>
      <div className='Home-container'>
        </div>
    </body>
    </Container>
  );
}

export default HomePage;