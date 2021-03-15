import React from "react";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

export const Resume = () => {
  return (
    <div className="container">
      <p>
        Thank you for your interest in my portfolio. You can download my resume
        here. I look forward to hearing from you!
      </p>
      <Button
        variant="secondary"
        href="https://drive.google.com/file/d/1ALT_mq-Xi3VZG6_VWr3jGM-ARKaPtrcJ/view?usp=sharing"
      >
        <FaDownload /> Download
      </Button>{" "}
    </div>
  );
};
