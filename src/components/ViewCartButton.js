import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import "./ViewCartButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        View Cart
      </button>
    </div>
  );
};
