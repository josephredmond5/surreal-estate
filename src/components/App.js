import React from "react";
import NavBar from "./navBar";
import "../styles/navbar.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title-name">surreal estate</h2>
      </header>
      <NavBar />
    </div>
  );
};

export default App;
