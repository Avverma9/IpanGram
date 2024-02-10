import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function CreateDepartment() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [numOfEmployees, setNoe] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint for your API
      const response = await axios.post(
        "http://localhost:5000/departments",
        {
          name,
          numOfEmployees,
        }
      );

      // Handle the response as needed (e.g., show a success message)
      console.log("Department created successfully:", response.data);

      // Clear the form fields after successful submission
      setName("");
      setNoe("");
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error creating department:", error);
    }
  };

  if (location.pathname !== "/department") {
    return null;
  }

  const containerStyle = {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "450px",
    margin: "auto",
  };

  const labelStyle = {
    marginBottom: "8px",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    background: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2>Create Department</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Department Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Number of Employees:
          <input
            type="number"
            value={numOfEmployees}
            onChange={(e) => setNoe(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Create Department
        </button>
      </form>
    </div>
  );
}
