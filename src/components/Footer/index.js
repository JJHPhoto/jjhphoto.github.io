import React from "react";
import "./Footer.css";
import { Card } from "react-bootstrap";
import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    // <div className="container">
    <div className="footer">
      <Card>
        <Card.Body>
          <div className="social-media">
            <h3 className="social-title"> Follow Me</h3>
            <a
              href="https://www.linkedin.com/in/joshuajhaller/"
              className="social-icons"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/JJHPhoto" className="social-icons">
              <FaGithub />
            </a>
            <a
              href="https://www.behance.net/joshuahaller"
              className="social-icons"
            >
              <FaBehance />
            </a>
            <a href="https://twitter.com/jpixtwit" className="social-icons">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/joshuajohnhaller/"
              className="social-icons"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/joshuajhallerphotos/"
              className="social-icons"
            >
              <FaFacebook />
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
    // </div>
  );
}
