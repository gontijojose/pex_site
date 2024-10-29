import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="text-center">
          {/* Logo e Nome da Escola */}
          <Col md={4} className="mb-3">
            <img src="logo.png" alt="Logo da Alpha Educação" className="img-fluid mb-2" style={{ maxWidth: '100px' }} />
            <h5>Alpha Educação</h5>
          </Col>
          
          {/* Links de Redes Sociais */}
          <Col md={4} className="mb-3">
            <h5>Siga-nos</h5>
            <div>
              <a href="https://facebook.com" className="text-white mx-2" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-white mx-2" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-white mx-2" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>
          </Col>
          
          {/* Copyright */}
          <Col md={4} className="mb-3">
            <h5>Contato</h5>
            <p>Email: contato@alphaeducacao.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Alpha Educação. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
