import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
    return(
        <div className="navbar">
            This is the NavBar component.
            <img className="logo" src='/images/surreal-logo.png' alt="Surreal Logo" />
        </div>
    );
};

export default NavBar;
