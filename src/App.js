import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './componnents/Name';
import Price from './componnents/Price';
import Description from './componnents/Description';
import Image from './componnents/Image';
import './styles.css';

const App = () => {
  const firstName = 'Oumaima'; 

  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" as={Image} />
        <Card.Body>
          <Card.Title as={Name} />
          <Card.Text as={Price} />
          <Card.Text as={Description} />
        </Card.Body>
      </Card>

      <p className="mt-3">{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</p>
    </Container>
  );
};

export default App;
