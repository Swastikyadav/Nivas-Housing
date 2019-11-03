import React from "react";
import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://cdn.glitch.com/88b46ae4-2180-4211-aa93-f3a6899d3f4a%2Flogo1.png?v=1557147871486"
          alt="logo"
          width="150"
        />
      </div>
      <div className="contact-no">
        <p>Call Us Toll-Free</p>
        <p className="phn-no">1-800-000-0000</p>
        <div className="underline-div"></div>
      </div>
    </div>
  );
}

export default Header;
