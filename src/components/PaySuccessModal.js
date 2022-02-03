import React from "react";
import "./PaySuccessModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const PaySuccessModal = ({ setPayDone }) => {
  return (
    <div className="PaySuccessModal">
      <div className="tick-icon-container">
        <span className="tick-icon">✓</span>
      </div>
      <p className="success-text">Payment Success!</p>
      <button className="close-modal-btn" onClick={() => setPayDone(false)}>
        <FontAwesomeIcon icon={faTimes} className="x-icon" />
      </button>
    </div>
  );
};
