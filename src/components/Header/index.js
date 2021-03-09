import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="title">Joshua J Haller</h1>
      <p>一天比一天</p>
      <a className="btn-lg linkBtn" href="/" role="button">
        Portfolio
      </a>
      <a className="btn-lg linkBtn" href="/Contact" role="button">
        Contact
      </a>
      <a className="btn-lg linkBtn" href="/About" role="button">
        About
      </a>
      <a className="btn-lg linkBtn" href="/Resume" role="button">
        Resume
      </a>
    </div>
  );
}
