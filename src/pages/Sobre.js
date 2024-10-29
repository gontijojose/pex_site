import React from 'react';
import { Container } from 'react-bootstrap';
import Galeria from '../components/Galeria'; // Importa o componente Galeria

function Sobre() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Sobre Nós</h1>
      <p>
        A Alpha Educação é uma instituição comprometida com a excelência no ensino, oferecendo uma 
        ampla gama de cursos e programas para capacitar nossos alunos. Nosso foco é no desenvolvimento
        de habilidades práticas e teóricas que preparem nossos alunos para o mercado de trabalho.
      </p>

      <Galeria />
    </Container>
  );
}

export default Sobre;
