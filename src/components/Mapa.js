import React from 'react';
import { Container } from 'react-bootstrap';

function Mapa() {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">Nossa Localização</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.902953623611!2d144.9575453156833!3d-37.81850007975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b1e56e2dd7%3A0xe3eb26b8a9c6f7a2!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1641322327268!5m2!1sen!2sus"
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
