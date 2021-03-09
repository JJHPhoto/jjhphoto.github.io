import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Nav from "../Nav";
import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      {/* <Jumbotron>
        <Container> */}
      <h1>Joshua J Haller</h1>
      <p>一天比一天</p>
      <Nav />
      {/* </Container>
      </Jumbotron> */}
    </div>
  );
}
