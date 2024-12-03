import React from 'react';
import { Navbar, Nav, Container, } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        {/* Brand with custom styling */}
        <Navbar.Brand href="" className="fw-bold text-white">
          MyWebsite
        </Navbar.Brand>

        {/* Navbar Toggle for responsive collapse */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Collapse for mobile responsiveness */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Home Link */}
            <Nav.Link href="home" className="text-white" active>
              Home
            </Nav.Link>

            {/* About Link */}
            <Nav.Link href="about" className="text-white">
              About
            </Nav.Link>

            {/* Add Medicine Link */}
            <Nav.Link href="add" className="text-white">
              Add Medicine
            </Nav.Link>

            {/* Medicine List Link */}
            <Nav.Link href="list" className="text-white">
              Medicine List
            </Nav.Link>

            {/* Logout Link */}
            <Nav.Link href="logout" className="text-white">
              Logout
            </Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
