import React from "react";
import "./PaySuccessModal.css";

export const PaySuccessModal = ({ setPayDone }) => {
  return (
    <div className="PaySuccessModal">
      <div className="tick-icon-container">
        <span className="tick-icon">✓</span>
      </div>
      <p className="success-text">Payment Success!</p>
      <button className="close-modal-btn" onClick={() => setPayDone(false)}>
        X
      </button>
    </div>
  );
};
