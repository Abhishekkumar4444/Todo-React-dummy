import "./Footer.css";

import React from "react";
// import "./Footer.css";

const Footer = ({ length }) => {
  return (
    <footer className="footer">
      <h1>{length} list items</h1>
    </footer>
  );
};

export default Footer;
