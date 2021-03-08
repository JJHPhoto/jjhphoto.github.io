import React from "react";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
