import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovementsPage: React.FC = () => {
  return (
    <Container fluid className="py-5">
      {/* Hero Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4 fw-bold text-white">Power to Progress.</h1>
          <p className="lead text-white">Explore the ideas and movements shaping society.</p>
          <Button variant="danger" size="lg">Join the Conversation</Button>
        </Col>
      </Row>

      {/* Content Highlights */}
      <Row className="g-4">
        {/* Featured Articles */}
        {[
          // Sustainability Articles
          { title: 'Sustainable Living', description: 'Practical tips for eco-friendly living.' },
          { title: 'Renewable Energy', description: 'Harnessing the power of nature for a sustainable future.' },
          { title: 'Circular Economy', description: 'Rethinking waste as a valuable resource.' },
        ].map((topic, idx) => (
          <Col md={4} key={idx}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{topic.title}</Card.Title>
                  <Card.Text>
                    {topic.description}
                  </Card.Text>
                    <Button variant="outline-danger">
                    <Link 
                      style={{ textDecoration: 'none', color: 'red' }} 
                      to={`/sustainability/${topic.title.toLowerCase().replace(' ', '')}`}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'red'}
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

export default MovementsPage;
