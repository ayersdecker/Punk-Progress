import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TechnologyPage: React.FC = () => {
  return (
    <Container fluid className="py-5">
      {/* Hero Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4 fw-bold text-white">Stay Ahead with Modern Tech</h1>
          <p className="lead text-white">Exploring innovations shaping our digital world.</p>
          <Button variant="primary" size="lg">Explore Articles</Button>
        </Col>
      </Row>

      {/* Content Highlights */}
      <Row className="g-4">
        {/* Featured Articles */}
        {[
          { title: 'AI Revolution', description: 'Discover how AI is transforming industries and everyday life.' },
          { title: 'Quantum Computing', description: 'An introduction to the next frontier in computational power.' },
          { title: 'Display Technologies', description: 'Explore the latest advancements in screen technology.' },
          { title: 'Electrification', description: 'The shift towards electric power in various sectors.' },
          { title: '5G Networks', description: 'The future of connectivity and its impact on society.' },
          { title: 'Cybersecurity', description: 'Protecting data in a digital world.' },
        ].map((topic, idx) => (
          <Col md={4} key={idx}>
        <Card className="h-100">
          <Card.Body>
            <Card.Title>{topic.title}</Card.Title>
            <Card.Text>
          {topic.description}
            </Card.Text>
            <Button variant="outline-primary">
            <Link 
              style={{textDecoration: 'none'}} 
              to={`/technology/${topic.title.toLowerCase().replace(' ', '')}`} 
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0d6efd'}>
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

export default TechnologyPage;
