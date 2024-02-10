import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./Registration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        {
          name,
          email,
          mobile,
          password,
      
        }
      );

      if (response.status === 201) {
        alert("Registered");
        navigate("/login");
      }
    } catch (err) {
      if (err.response) {
        console.error("Server Error:", err.response.data);
        setError("Registration failed. Please try again.");
      } else if (err.request) {
        console.error("Network Error:", err.request);
        setError("Network error. Please check your connection and try again.");
      } else {
        console.error("Error:", err.message);
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  if (!(location.pathname === "/" || location.pathname.match(/^\/\d+$/))) {
    return null;
  }
  return (
    <>
      <div className="registration-container my-5">
        <div className="left-image">
          <img
            src="https://i.pinimg.com/originals/02/fc/da/02fcda11cbfb2a84537f9d059b4c81b2.gif"
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="header-info">
            <h4>Create a free account</h4>
          </div>
          <br />
          <br />
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <label htmlFor="mobile" className="input-label">
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="input-field"
          />
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        
         
          <button
            type="submit"
            disabled={loading}
            className="submit-button my-4"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p>Already have an account ?</p> <a href="/login">Login</a>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Registration;
