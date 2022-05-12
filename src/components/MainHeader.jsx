import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function MainHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Info">Info</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
