// src/components/Modal.js
import React from "react";
import "./Modal.css"; // Import CSS for modal

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Error</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
