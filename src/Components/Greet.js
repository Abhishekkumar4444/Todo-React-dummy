/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Greet.css";

const Greet = (props) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Greet;
