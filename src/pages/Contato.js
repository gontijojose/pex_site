import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Mapa from '../components/Mapa';

function Contato() {
  return (
    <Container className="my-5">
      <h2>Entre em Contato</h2>
      <Mapa />
      <p>Para mais informações, entre em contato conosco pelo formulário abaixo:</p>
      
      <Form>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Seu nome" />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>

        <Form.Group controlId="formMensagem" className="mt-3">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Sua mensagem" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Contato;
