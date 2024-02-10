import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function CreateEmployee() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [doj, setDoj] = useState("");
  const [nameDepartment, setNameDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint for your API
      const response = await axios.post("http://localhost:5000/employees", {
        name,
        doj,
        nameDepartment,
        email,
        phone,
        state,
        city,
        address,
        pinCode,
      });

      // Handle the response as needed (e.g., show a success message)
      console.log("Employee created successfully:", response.data);

      // Clear the form fields after successful submission
      setName("");
      setDoj("");
      setNameDepartment("");
      setEmail("");
      setPhone("");
      setState("");
      setCity("");
      setAddress("");
      setPinCode("");
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error creating employee:", error);
    }
  };

  if (location.pathname !== "/employees") {
    return null;
  }

  const containerStyle = {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "1300px", // Adjust the maximum width as needed
    margin: "auto",
  };

  const formStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
  };

  const labelStyle = {
    marginBottom: "8px",
    display: "block",
  };

  const inputStyle = {
    width: "120px",
    padding: "8px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    gridColumn: "span 9", // Span the button across 3 columns
    background: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2>Create Employee</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Employee Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Date of Joining:
          <input
            type="date"
            value={doj}
            onChange={(e) => setDoj(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Dept name:
          <input
            type="text"
            value={nameDepartment}
            onChange={(e) => setNameDepartment(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Pin Code:
          <input
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Create Employee
        </button>
      </form>
    </div>
  );
}
