import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/dist";
import "./Sidebar.css";
const Sidebar = () => {
  const location = useLocation();
  const handleLogOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("owner")
  };
  if (location.pathname !== "/profile" && location.pathname !== "shared") {
    return null;
  }
  const isAdmin=localStorage.getItem("owner")
  
  return (
    <nav className="sidebar">
      <ul className="list-unstyled components">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/shared">Share</Link>
        </li>
      
          <li>
            <Link to="/employees">Employees</Link>
          </li>
      {isAdmin &&(
   <li>
   <Link to="/department">Department</Link>
 </li>
      )}
               
        <li>
          <Link onClick={handleLogOut} to="/login">
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
