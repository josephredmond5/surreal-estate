import React from 'react';
import NavBar from './navBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import '../styles/navbar.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;

