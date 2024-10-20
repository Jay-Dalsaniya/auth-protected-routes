// src/components/Login.js
import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file
import Modal from "./Modal"; // Import the Modal component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const { login, isAuthenticated } = useAuth(); // Get authentication state and login function
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = login(email, password); // Call the login function
    if (isValid) {
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } else {
      setShowModal(true); // Show modal for invalid login
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {showModal && (
        <Modal message="Invalid email or password." onClose={closeModal} />
      )}
    </div>
  );
};

export default Login;
