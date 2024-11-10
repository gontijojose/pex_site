import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CounterGroup from '../components/CounterGroup';
import Carrosel from '../components/Carrosel';

function Home() {
  return (
    <Container fluid className="text-center py-5">

      <Container className="mt-5">
        <Row className="my-5">
        <Col md={6} className="text-center">
            <img
              src="/home0.png"
              className="img-fluid mb-3"
            />
          </Col>
          <Col md={6} className="text-center">
            <img
              src="/home1.png"
              className="img-fluid mb-3"
            />
          </Col>
          </Row>
          <CounterGroup />
          <Row className="my-5">
          <Col md={6} className="text-center">
          <img
              src="/home2.png"
              className="img-fluid mb-3"
            />
          </Col>
          <Col md={6} className="text-center">
          <img
              src="/home3.png"
              className="img-fluid mb-3"
            />
          </Col>
        </Row>
      </Container>
      <Carrosel />
    </Container>
  );
}

export default Home;
