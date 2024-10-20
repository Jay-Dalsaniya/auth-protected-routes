// src/AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    // Replace this with your actual authentication logic
    if (email === "dalsaniyajay@gmail.com" && password === "123456789") {
      setIsAuthenticated(true); // Set authentication state
      return true; // Return true for successful login
    }
    return false; // Return false for unsuccessful login
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
