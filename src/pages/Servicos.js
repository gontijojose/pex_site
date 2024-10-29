import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FAQ from '../components/FAQ';

function Servicos() {
  return (
    <Container className="my-5">
      <h2>Nossos Serviços</h2>
      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="img4.jpg" />
            <Card.Body>
              <Card.Title>Ensino Fundamental</Card.Title>
              <Card.Text>
                Oferecemos um ensino fundamental completo, com foco na formação integral dos alunos.
              </Card.Text>
              <Button variant="primary">Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="img5.jpg" />
            <Card.Body>
              <Card.Title>Cursos Preparatórios</Card.Title>
              <Card.Text>
                Cursos preparatórios para vestibulares e ENEM, com alto índice de aprovação.
              </Card.Text>
              <Button variant="primary">Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="img6.jpg" />
            <Card.Body>
              <Card.Title>Workshops</Card.Title>
              <Card.Text>
                Diversos workshops para desenvolvimento de habilidades profissionais e acadêmicas.
              </Card.Text>
              <Button variant="primary">Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <FAQ />
    </Container>
  );
}

export default Servicos;