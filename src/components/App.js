import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/navbar.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title-name">surreal estate</h2>
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
