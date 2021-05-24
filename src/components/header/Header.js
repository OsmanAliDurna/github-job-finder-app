import React from "react";
import headerImg from "../../assets/job-logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={headerImg} alt="headerLogo" />
      <h1>GITHUB JOB FINDER</h1>
    </div>
  );
}

export default Header;
