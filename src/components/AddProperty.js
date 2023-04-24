import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Router, Route } from 'react-router-dom';
import "../styles/add-property.css";
import Alert from './Alert.js';


const initialState = {
  fields: {
    title: "",
    type: "Flat",
    bedrooms: "",
    bathrooms: "",
    price: "",
    city: "Manchester",
  },
  alert: {
    message: '',
    isSuccess: false,
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    console.log(fields);
    axios.post("/api/v1/PropertyListing", fields)
      .then(() => {
        setAlert({ message: "Property Added", isSuccess: true });
        setFields(initialState.fields);
      })
      .catch((error) => {
        setAlert({ message: error.message, isSuccess: false });
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
  <h2>Add Property</h2>
  <form onSubmit={handleAddProperty}>
    <label htmlFor="title">
      Title
      <input
        id="title"
        name="title"
        type="text"
        value={fields.title}
        onChange={handleFieldChange}
      />
    </label>
    <label htmlFor="type">
      Type
      <select
        id="type"
        name="type"
        value={fields.type}
        onChange={handleFieldChange}
      >
        <option value="Flat">Flat</option>
        <option value="Detached">Detached</option>
        <option value="Semi-Detached">Semi-Detached</option>
        <option value="Terraced">Terraced</option>
        <option value="End of Terrace">End of Terrace</option>
        <option value="Cottage">Cottage</option>
        <option value="Bungalow">Bungalow</option>
      </select>
    </label>
    <label htmlFor="bedrooms">
      Bedrooms
      <input
        id="bedrooms"
        name="bedrooms"
        type="number"
        min="0"
        value={fields.bedrooms}
        onChange={handleFieldChange}
      />
    </label>
    <Alert message={alert.message} success={alert.isSuccess} />
    <button type="submit">Add Property</button>
  </form>
</div>
  );
};

export default AddProperty;
