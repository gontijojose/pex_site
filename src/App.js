import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Doe from './pages/Doe';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import AOS from 'aos';

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <Router>
      <Navbar bg="primary" expand="lg">
        <Container>
        <Navbar.Brand href="/">
            <img
              src="/logo.png"
              width="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <Nav.Link href="/Doe">Doe Agora!</Nav.Link>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Doe" element={<Doe />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
