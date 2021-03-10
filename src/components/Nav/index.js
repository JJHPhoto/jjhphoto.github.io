import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default function Nav() {
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">About</Button>
        <Button variant="secondary">Contact</Button>
        <Button variant="secondary">Portfolio</Button>
        <Button variant="secondary">Resume</Button>
      </ButtonGroup>
    </div>
  );
}
