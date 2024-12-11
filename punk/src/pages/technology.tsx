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
            <Card className="h-100 card-hover" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: 'none', boxShadow: '0 0 10px 0 rgba(255, 255, 255, 0.5)', animation: 'glow 10s infinite' }}>
              <Card.Body>
                <Card.Title className="text-white">{topic.title}</Card.Title>
                <Card.Text className="text-white">
                  {topic.description}
                </Card.Text>
                <Button variant="outline-primary">
                  <Link 
                    style={{ textDecoration: 'none', color: '#0d6efd' }} 
                    to={`/technology/${topic.title.toLowerCase().replace(' ', '')}`} 
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0d6efd'}>
                    Read More
                  </Link>
                </Button>
              </Card.Body>
            </Card>

            <style>{`
              @keyframes glow {
                0% { box-shadow: 0 0 10px 0 rgba(255, 0, 0, 0.5); }
                25% { box-shadow: 0 0 10px 0 rgba(0, 255, 0, 0.5); }
                50% { box-shadow: 0 0 10px 0 rgba(0, 0, 255, 0.5); }
                75% { box-shadow: 0 0 10px 0 rgba(255, 255, 0, 0.5); }
                100% { box-shadow: 0 0 10px 0 rgba(255, 0, 255, 0.5); }
              }

              .card-hover:hover {
                transform: translate(-10px, -10px);
                transition: transform 0.3s;
              }
            `}</style>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TechnologyPage;
