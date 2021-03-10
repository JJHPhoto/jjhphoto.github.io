import React from "react";
import { Card } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="container">
      <Card>
        <Card.Header>Footer text</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              Egg Sausage! <cite title="Source Title">Bill Fasset</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}
