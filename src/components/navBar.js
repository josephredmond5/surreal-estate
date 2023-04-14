import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
    return(
        <div className="navbar">
            This is the NavBar component.
            <img className="logo" src='/images/surreal-logo.png' alt="Surreal Logo" />

            <ul className="navbar-links">
  <li className="navbar-links-item">
    <Link href="/properties">View Properties</Link>
  </li>
  <li className="navbar-links-item">
    <Link href="/add-property">Add a Property</Link>
  </li>
</ul>  
        </div>
    );
};

export default NavBar;
