import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Depoimentos from '../components/Depoimentos';

function Home() {
  return (
    <Container fluid className="bg-primary text-white text-center py-5">
      <h1 data-aos="fade-up">Bem-vindo à Alpha Educação</h1>
      <p>Excelência no ensino e desenvolvimento profissional.</p>
      <Button variant="light" href="/sobre">
        Saiba Mais
      </Button>

      <Container className="mt-5">
        <Row className="my-5">
          <Col md={4} className="text-center">
            <img src="img1.jpg" alt="Missão" className="img-fluid rounded-circle mb-3" />
            <h3>Nossa Missão</h3>
            <p>Capacitar indivíduos para enfrentar os desafios do mercado de trabalho.</p>
          </Col>
          <Col md={4} className="text-center">
            <img src="img2.jpg" alt="Visão" className="img-fluid rounded-circle mb-3" />
            <h3>Nossa Visão</h3>
            <p>Ser uma referência em educação de qualidade e inovação no ensino.</p>
          </Col>
          <Col md={4} className="text-center">
            <img src="img3.jpg" alt="Valores" className="img-fluid rounded-circle mb-3" />
            <h3>Nossos Valores</h3>
            <p>Compromisso, ética, inovação e respeito à diversidade.</p>
          </Col>
        </Row>
      </Container>
      <Depoimentos />
    </Container>
  );
}

export default Home;
