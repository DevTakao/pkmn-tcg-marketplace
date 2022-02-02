import React from "react";
import "./TopHeader.css";
import Logo from "../media/images/tcg-logo.avif";

export const TopHeader = () => {
  return (
    <div className="TopHeader">
      <div className="header-content">
        <p className="heading-text">TCG Marketplace</p>
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>
      </div>

      <div className="logo-shadow"></div>
    </div>
  );
};
