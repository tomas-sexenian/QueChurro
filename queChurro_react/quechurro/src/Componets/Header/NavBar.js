import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
        <Navbar bg="light" variant="light" fixed='top'>
          <Container>
            <Navbar.Brand href="#home"><h1 className='titNav'>QuéChurro<span>.</span></h1></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#hero">Inicio</Nav.Link>
              <Nav.Link href="#about">Acerca de QuéChurro</Nav.Link>
              <Nav.Link hhref="#menu">Menu</Nav.Link>
              <Nav.Link href="#events">Eventos</Nav.Link>
              <Nav.Link href="#book-a-table">Reservas</Nav.Link>
              <Nav.Link href="#gallery">Galería</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="#contact"><Button variant="outline-warning" size="sm" >Reserva</Button>{' '}</Nav.Link>
                </Nav.Item>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar