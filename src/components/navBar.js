import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
    return(
        <div className="navbar">
            This is the NavBar component.
            <img className="logo" src='/images/surreal-logo.png' alt="Surreal Logo" />

            <ul className="navbar-links">
  <li className="navbar-links-item">
    <a href="/properties">View Properties</a>
  </li>
  <li className="navbar-links-item">
    <a href="/add-property">Add a Property</a>
  </li>
</ul>  
        </div>
    );
};

export default NavBar;


