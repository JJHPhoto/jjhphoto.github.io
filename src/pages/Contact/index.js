import React from "react";
import { FaEnvelope, FaMobile } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="contact">
      {/* <h2 className="contactTitle"> Contact Me</h2> */}
      <p>
        <FaEnvelope /> info@joshuajhaller.com
      </p>
      <p>
        <FaMobile />
        206 235 9798
      </p>
    </div>
  );
};
