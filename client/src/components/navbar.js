import React, { useState } from "react";

function Navbar() {
  // State to manage the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" >
        MCET Seminar Hall 
      </a>
      <div className={"dropdown" + (dropdownOpen ? " show" : "")}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="navbarDropdown"
          onClick={toggleDropdown}
        >
          Dropdown link
        </button>
        <div className={"dropdown-menu" + (dropdownOpen ? " show" : "")} aria-labelledby="navbarDropdown" >
          <a className="dropdown-item" href="/eee1">EEE Seminar Hall 1</a>
          <a className="dropdown-item" href="/eee2">EEE Seminar Hall 2</a>
          <a className="dropdown-item" href="/mech">Mechanical Seminar Hall</a>
          <a className="dropdown-item" href="/cshall">CS Hall</a>
        </div>
      </div>
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

