import React, { useState } from "react";
import { Link } from "react-scroll";
import beeLogo from "../assets/bee-logo.png";
import "./Navbar.css";

function Navbar({ onBookVisit }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={beeLogo} alt="Bee Logo" className="logo" />
        <h1>Buzzing Bees</h1>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="about" smooth duration={500} onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link
          to="services"
          smooth
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="health"
          smooth
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Health
        </Link>
        <Link
          to="policies"
          smooth
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          Policies
        </Link>
        <button
          onClick={() => {
            setIsOpen(false);
            onBookVisit();
          }}
        >
          Book a Visit
        </button>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
