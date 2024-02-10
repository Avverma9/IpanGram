import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(30); // 30-second timer
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const mobile = localStorage.getItem("mobile");

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      navigate("/login");
    }

    const fetchData = async () => {
      try {
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");

        const newData = {
          name: name,
          mobile: mobile,
          email: email,
        };

        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [name, mobile]);


  return (
    <div className="profile-container">
      <br />
      <br />
      <div className="profile-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
          width="20%"
          height="20%"
        />
      </div>
      <br />
      <center>
        <table>
          <tr>
            <td>
              <b>Name: </b>
            </td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>
              <b>Email: </b>
            </td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>
              <b>Phone: </b>
            </td>
            <td>{data.mobile}</td>
          </tr>
        </table>
      </center>

      <br />
      <br />

      {/* Display the timer only during the loading state */}
      {loading && <p>Data Loading and will reflect in {timer} seconds</p>}
    </div>
  );
}
