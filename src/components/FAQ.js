import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

function FAQ() {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">Perguntas Frequentes</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Como faço para me inscrever?</Accordion.Header>
          <Accordion.Body>
            Você pode se inscrever através do nosso site ou entrando em contato diretamente com nossa secretaria.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Quais são os horários das aulas?</Accordion.Header>
          <Accordion.Body>
            Oferecemos horários variados para atender às necessidades de todos os nossos alunos. Consulte a secretaria para detalhes.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Oferecem aulas de reforço?</Accordion.Header>
          <Accordion.Body>
            Sim, temos aulas de reforço para auxiliar os alunos em dificuldades.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default FAQ;
