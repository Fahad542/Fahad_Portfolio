import React from "react";
const Navbar = () => {
  return (
    <div className="header sticky-top d-flex align-items-center">
      <p className="mylogo">Fahad Shafiq</p>
      <div className="nav">
        <a className="link" href="">
          Home
        </a>
        <a className="link" href="">
          About
        </a>
        <a className="link" href="">
          Contact
        </a>
        <a className="link" href="">
          Projects
        </a>
      </div>
    </div>

    
  );
};

export default Navbar;
