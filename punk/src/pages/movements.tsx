import '../App.css';
import { Stack, Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

function MovementsPage() {
  return (
    <Container fluid className="py-5 bg-light">
      <Stack direction="vertical" gap={0} className="Home">
        {/* Hero Section */}
        <Stack direction="vertical" gap={3} className="justify-content-center text-center mb-5">
          <h1 className="display-4 fw-bold" style={{ color: 'black' }}>Power to Progress.</h1>
          <p className="lead" style={{ color: 'black' }}>Explore the ideas and movements shaping society.</p>
          <Button variant="danger" size="lg" style={{ width: 'auto', alignSelf: 'center' }}>Join the Conversation</Button>
        </Stack>
        {/* Content Highlights */}
        <Stack direction="horizontal" gap={3}>
          {['Social Justice', 'Tech for Good', 'Climate Action'].map((topic, idx) => (
            <Card className="text-center" key={idx} style={{ flex: 1 }}>
              <Card.Body>
                <Card.Title>{topic}</Card.Title>
                <Card.Text>
                  Learn about {topic.toLowerCase()} and its impact on our world.
                </Card.Text>
                <Button variant="outline-danger">Read More</Button>
              </Card.Body>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export default MovementsPage;
