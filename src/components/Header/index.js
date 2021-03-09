import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Nav from "../Nav";
// import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <Jumbotron>
        <Container>
          <h1>Josh's Web Dev</h1>
          <p>This will be Josh's amazing web dev portfolio!</p>
          <Nav />
        </Container>
      </Jumbotron>
    </div>
  );
}
