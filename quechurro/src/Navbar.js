import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" fixed='top'>
        <Container>
          <Navbar.Brand href="#home"><h1>QuéChurro<span>.</span></h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#hero">Inicio</Nav.Link>
            <Nav.Link href="#about">Acerca de QuéChurro</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#events">Eventos</Nav.Link>
            <Nav.Link href="#book-a-table">Reservas</Nav.Link>
            <Nav.Link href="#gallery">Galería</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav>
            <Nav.Link href="#contact"><Button variant="outline-warning" size="lg" >Reserva</Button>{' '}</Nav.Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;