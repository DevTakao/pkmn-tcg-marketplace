import React from "react";
import "./ViewCartButton.css";

export const ViewCartButton = ({ setOpenCart }) => {
  return (
    <div className="ViewCartButton">
      <button className="button" onClick={() => setOpenCart(true)}>
        View Cart
      </button>
    </div>
  );
};
