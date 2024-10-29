import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function Depoimentos() {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">O que dizem sobre nós</h3>
      <Carousel>
        <Carousel.Item>
          <p>"O curso preparatório foi excelente e me ajudou muito a passar no vestibular!"</p>
          <small>- João Silva</small>
        </Carousel.Item>
        <Carousel.Item>
          <p>"Professores muito dedicados e com uma ótima metodologia!"</p>
          <small>- Maria Oliveira</small>
        </Carousel.Item>
        <Carousel.Item>
          <p>"As aulas são dinâmicas e bem explicativas. Adorei!"</p>
          <small>- Carla Souza</small>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Depoimentos;
