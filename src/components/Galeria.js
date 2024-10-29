import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Galeria() {
  const imagens = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
  ];

  return (
    <div className="my-5">
      <h3 className="text-center">Galeria de Fotos</h3>
      <Row className="mt-4">
        {imagens.map((imagem, index) => (
          <Col md={4} className="mb-4" key={index}>
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
