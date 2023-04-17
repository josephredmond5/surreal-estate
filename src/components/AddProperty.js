import React, { useState } from "react";
import "../styles/add-property.css";

const initialState = {
  fields: {
    title: "",
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div className="add-property">
      <h2>Add Property</h2>
      <form onSubmit={handleAddProperty}>
        <button type="submit" value="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
