import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SustainabilityPage: React.FC = () => {
  return (
    <Container fluid className="py-5">
      {/* Hero Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4 fw-bold text-white">Sustain the Future. Today.</h1>
          <p className="lead text-white">Practical insights for a greener world.</p>
          <Button variant="success" size="lg">Learn More</Button>
        </Col>
      </Row>

      {/* Content Highlights */}
      <Row className="g-4">
        {/* Featured Articles */}
        {[
          { title: 'AI Revolution', description: 'Discover how AI is transforming industries and everyday life.' },
          { title: 'Quantum Computing', description: 'An introduction to the next frontier in computational power.' },
          { title: 'Display Technologies', description: 'Explore the latest advancements in screen technology.' }
        ].map((topic, idx) => (
          <Col md={4} key={idx}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{topic.title}</Card.Title>
                  <Card.Text>
                    {topic.description}
                  </Card.Text>
                    <Button variant="outline-success">
                    <Link 
                      style={{ textDecoration: 'none', color: 'green' }} 
                      to={`/sustainability/${topic.title.toLowerCase().replace(' ', '')}`}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'green'}
                    >
                      Read More
                    </Link>
                  </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

 
    </Container>
  );
};

export default SustainabilityPage;
