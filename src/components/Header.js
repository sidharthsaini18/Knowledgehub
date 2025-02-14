import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div id="headerBackground">
        <div id="headerElements">
          <p id="headerLogoText">
            Knowledge<span id="headerFurtherLogo">Hub</span>
          </p>
          <p id="homelogo">Home</p>
          <p id="coursesLogo">Courses</p>
          <p id="aboutusLogo">About us</p>
          <p id="contactusLogo">Contact us</p>
        </div>
      </div>
    </>
  );
}

export default Header;
