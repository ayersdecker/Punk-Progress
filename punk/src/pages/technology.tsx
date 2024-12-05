import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TechnologyPage: React.FC = () => {
  return (
    <Container fluid className="py-5 bg-light">
      {/* Hero Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4 fw-bold">Stay Ahead with Modern Tech</h1>
          <p className="lead">Exploring innovations shaping our digital world.</p>
          <Button variant="primary" size="lg">Explore Articles</Button>
        </Col>
      </Row>

      {/* Content Highlights */}
      <Row className="g-4">
        {/* Featured Articles */}
        {['AI Revolution', 'Web3 Explained', 'Quantum Computing Basics'].map((topic, idx) => (
          <Col md={4} key={idx}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{topic}</Card.Title>
                <Card.Text>
                  Short description or excerpt from the article about {topic.toLowerCase()}.
                </Card.Text>
                <Button variant="outline-primary">
                  <Link style={{textDecoration: 'none'}} to={`/technology/${topic.toLowerCase().replace(' ', '')}`}>Read More</Link>
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
