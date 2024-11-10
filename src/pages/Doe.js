import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Doe() {
  return (

    <div className="page-content">
      <Container>
        {/* Primeira Seção: Spacer */}
        <Row className="my-5">
          <Col>
            <div className="spacer"></div>
          </Col>
        </Row>

        {/* Segunda Seção: Texto sobre APAE */}
        <Row className="my-5">
          <Col md={6}>
            <p>
              APAE “Associação de Pais e Amigos dos Excepcionais de Joinville” foi fundada em 04 de abril de 1965 pela professora Lia Rosa Jardim de Santis, fez história no trabalho com pessoas com deficiência intelectual e múltipla ao longo de décadas.
            </p>
            <p>
              Prestando atendimentos nas mais diversas especialidades: odontologia, neuropediatra, psiquiatria, fonoaudióloga, terapia ocupacional, fisioterapia, psicologia, assistência social e nutrição.
            </p>
            <p>
              Contribuindo de forma planejada e continua para a melhoria da qualidade de vida da pessoa com deficiência e suas famílias; buscando a promoção humana, liberdades fundamentais, cidadania e inclusão social. Faz isso lutando muito por recursos financeiros para manter e ampliar estes atendimentos.
            </p>
            <p>
              Primando pela importância da assistência e auxílio na qualidade de vida, não só aos portadores, mas aos pais e responsáveis por essas pessoas especiais. O faz com o apoio do governo, das empresas e da comunidade. As doações e campanha beneficiam diretamente a família apaiane, bem como possibilita a melhoria nos atendimentos.
            </p>
          </Col>

          {/* Coluna com a Imagem QR Code */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Nosso PIX</Card.Title>
                <img
                  decoding="async"
                  width="150"
                  height="150"
                  src="/pix.png"
                  alt="QR Code"
                />
                <Card.Text className="mt-3">
                  Nossa Chave é CNPJ 84.720.861/0001-34
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Conta no Banco do Brasil</Card.Title>
                <Card.Text>
                  Ag: 3155-0 - CC: 4260-9
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Doe;