import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Galeria() {
  const imagens = [
    'sobre1.jpg',
    'sobre2.jpg',
    'sobre3.jpg',
    'sobre4.jpg'
  ];

  return (
    <div className="my-5">
      <h3 className="text-center">Galeria de Fotos</h3>
      <Row className="mt-4">
        {imagens.map((imagem, index) => (
          <Col md={3} className="mb-3" key={index}>
            <img
              src={imagem}
              alt={`Imagem ${index + 1}`}
              className="img-fluid rounded"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Galeria;
