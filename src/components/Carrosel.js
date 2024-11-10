import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function Carrosel() {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">O que dizem sobre nós</h3>
      <Carousel>
        <Carousel.Item>
        <img
              src="/carrousel1.png"
              className="img-fluid mb-3"
            />
        </Carousel.Item>
        <Carousel.Item>
        <img
              src="/carrousel2.png"
              className="img-fluid mb-3"
            />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carrosel;
