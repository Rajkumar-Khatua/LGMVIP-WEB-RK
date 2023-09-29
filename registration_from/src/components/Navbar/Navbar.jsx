import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <span className="logo">Let's GrowMore</span>
        <span className="slogan">LGM Task 3 </span>
      </div>
      <div className="right">
        <button className="infoBtn">Info</button>
      </div>
    </div>
  );
}

export default Navbar;
