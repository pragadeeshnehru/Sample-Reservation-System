import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" >
        MCET Seminar Hall Portal
      </a>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

