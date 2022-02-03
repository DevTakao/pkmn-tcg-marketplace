import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import "./ViewCartButton.css";

export const ViewCartButton = ({ setOpenCart }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    if (cartItems.length <= 9) {
      setAlert(cartItems.length + "");
    } else {
      setAlert("9+");
    }
  }, [cartItems]);

  return (
    <div className="ViewCartButton">
      <button className="button" onClick={() => setOpenCart(true)}>
        {!!parseInt(alert) && <span className="quantity-alert">{alert}</span>}
        View Cart
      </button>
    </div>
  );
};
