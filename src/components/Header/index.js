import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Josh's Web Dev</h1>
          <p>This will be Josh's amazing web dev portfolio!</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
