import React, { useContext } from "react";
import "./CartModal.css";
import { _apiData } from "../_mocks/search_results.js";
import uniqueId from "lodash.uniqueid";
import { CartContext } from "../App";

export const CartModal = ({ setOpenCart }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const data = cartItems;

  const handleQuantityEdit = (_item, action) => {
    let newQuantity = 0;
    if (action === "INC") {
      if (_item.quantity < _item.item.set.total) {
        newQuantity = _item.quantity + 1;
      } else {
        newQuantity = _item.quantity;
      }
    } else {
      if (_item.quantity > 0) {
        newQuantity = _item.quantity - 1;
      }
    }

    const updatedCart = !!newQuantity
      ? cartItems
          .filter((item) => item.item.id !== _item.item.id)
          .concat([
            {
              item: _item.item,
              quantity: newQuantity,
            },
          ])
      : cartItems.filter((x) => x.item.id !== _item.item.id);
    console.log(updatedCart);
    setCartItems(updatedCart);
  };

  return (
    <div className="CartModal">
      <div className="cart-item-area">
        <div className="cart-item-list">
          {data.map((cartItem) => (
            <div
              key={uniqueId() + "_" + cartItem.item.id}
              className="cart-item"
            >
              <div className="item-img-container">
                <img
                  className="item-img"
                  src={cartItem.item.images.small}
                  alt={cartItem.item.name}
                />
              </div>
              <div className="stock-info-container">
                <p className="item-name">
                  {cartItem.item.name ? cartItem.item.name : "Card Name N/A"}
                </p>
                <p className="item-price">
                  {cartItem.item.cardmarket &&
                  cartItem.item.cardmarket.prices &&
                  cartItem.item.cardmarket.prices.averageSellPrice ? (
                    <span className="text-thicker">
                      ${cartItem.item.cardmarket.prices.averageSellPrice}
                    </span>
                  ) : (
                    "(N/A)"
                  )}{" "}
                  per card
                </p>
                <p className="item-instock text-grey">
                  {cartItem.item.set && !!cartItem.item.set.total ? (
                    <span className="text-red text-thicker">
                      {cartItem.item.set.total}
                    </span>
                  ) : (
                    "0"
                  )}{" "}
                  cards left
                </p>
              </div>
              <div className="order-info-container">
                <div className="order-quantity-container text-blue">
                  <span className="order-quantity-number text-thicker">
                    {cartItem.quantity}
                  </span>
                  <div className="order-quantity-controls">
                    <span
                      className="order-quantity-control order-quantity-inc"
                      onClick={() => handleQuantityEdit(cartItem, "INC")}
                    >
                      ^
                    </span>
                    <span
                      className="order-quantity-control order-quantity-dec"
                      onClick={() => handleQuantityEdit(cartItem, "DEC")}
                    >
                      v
                    </span>
                  </div>
                </div>
                <div className="order-item-total-container">
                  <p className="label">price</p>
                  <p className="order-item-total text-blue text-thicker">{`$${"49"}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="clear-cart-btn-container">
          <div className="white-shade"></div>
          <button
            className="clear-cart-btn text-grey"
            onClick={() => setCartItems([])}
          >
            Clear all
          </button>
        </div>
      </div>
      <div className="net-total-area text-thicker">
        <div className="total-cards-container">
          <span className="label">Total cards</span>
          <span className="sum-number text-red">7</span>
        </div>
        <div className="total-price-container text-thicker">
          <span className="label">Total price</span>
          <span className="sum-number text-red">$196</span>
        </div>
        <div className="pay-button-container">
          <button className="pay-button">Pay Now</button>
        </div>
      </div>
      <button className="close-cart-btn" onClick={() => setOpenCart(false)}>
        X
      </button>
    </div>
  );
};
