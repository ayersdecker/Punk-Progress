import '../App.css';
import { Stack, Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

function SustainabilityPage() {
  return (
    <Container fluid className="py-5 bg-light">
      <Stack direction="vertical" gap={4} className="Home">
        {/* Hero Section */}
          <h1 className="display-4 fw-bold" style={{ color: 'black' }}>Sustain the Future. Today.</h1>
           <p className="lead" style={{ color: 'black' }}>Practical insights for a greener world.</p>

        <Stack direction="horizontal" gap={3} className="justify-content-center">
          <Button variant="success" size="lg">Learn More</Button>
        </Stack>

        {/* Content Highlights */}
        <Stack direction="horizontal" gap={3}>
          {['Renewable Energy', 'Eco-Friendly Tech', 'Sustainable Living'].map((topic, idx) => (
            <Card className="text-center" key={idx} style={{ flex: 1 }}>
              <Card.Body>
                <Card.Title>{topic}</Card.Title>
                <Card.Text>
                  Short description about {topic.toLowerCase()} and its impact.
                </Card.Text>
                <Button variant="outline-success">Read More</Button>
              </Card.Body>
            </Card>
          ))}
        </Stack>

      </Stack>
    </Container>
  );
}

export default SustainabilityPage;
