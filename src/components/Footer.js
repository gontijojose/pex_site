import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube  } from 'react-icons/fa';

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
              <a href="https://www.facebook.com/APAEJoinville/" className="text-white mx-2" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/apaedejoinville/" className="text-white mx-2" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5547991524191&text=Entrei%20em%20contato%20pelo%20site%20da%20APAE%20Joinville%2C%20preciso%20de%20algumas%20informações" className="text-white mx-2" aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UCDLy4HwjChygyLJeCuuTq1g" className="text-white mx-2" aria-label="Youtube">
                <FaYoutube size={24} />
              </a>
            </div>
          </Col>
          
          {/* Copyright */}
          <Col md={4} className="mb-3">
            <h5>Contato</h5>
            <p>Email: apae@apaejoinville.com.br</p>
            <p>Telefone: (47) 3431-7400</p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Todos Direito Reservados para APAE Joinville</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
