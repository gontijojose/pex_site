import React from 'react';
import { Container } from 'react-bootstrap';

function Mapa() {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">Nossa Localização</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.4742585186367!2d-48.83421558427523!3d-26.304930341765836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb23e5d925acf%3A0xda5181a70aeffe5f!2sAPAE%20-%20Joinville!5e0!3m2!1spt-BR!2sbr!4v1699637919535!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Localização da Alpha Educação"
      ></iframe>
    </Container>
  );
}

export default Mapa;
