import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const admin="admin@gmail.com"
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill mandatory fields");
      console.error("Email and password are required");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/login/user",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        navigate("/profile");
        let mobile = response.data.user.mobile
        let name = response.data.user.name
        let email = response.data.user.email
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("name",name)
        localStorage.setItem("mobile",mobile)
        localStorage.setItem("loggedIn",true)
        if(email === admin){
          localStorage.setItem("owner",true)
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const paragraphStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    padding: "5px",
    backgroundColor: "#f0f0f0",
  };

  return (
    <>
      <div className="login-container my-5">
        <div className="login-right-side-image">
          <img
            src="https://assets-v2.lottiefiles.com/a/6beb774c-1166-11ee-a6f1-4788c8724adf/E9TtaYgKZu.gif"
            alt=""
          />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <p style={paragraphStyle}>Login to IpanGram</p>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password-btn"
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              {showPassword ? (
                <FaRegEyeSlash style={{ color: "red" }} />
              ) : (
                <FaRegEye style={{ color: "blue" }} />
              )}
            </button>
          </div>
          <button type="submit" className="login-button my-4">
            <b>Login</b>
          </button>
          <p>If you don't have an account</p> <a href="/">Register Here</a>
        </form>
      </div>
    </>
  );
};

export default Login;
