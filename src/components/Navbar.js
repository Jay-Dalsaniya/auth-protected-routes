import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Import useAuth
import "./Navbar.css"; // Import Navbar CSS

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Get authentication state and logout function

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">My Project</Link> {/* Replace with your logo or text */}
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
