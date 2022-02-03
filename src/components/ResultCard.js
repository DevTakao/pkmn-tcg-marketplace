import React, { useContext } from "react";
import { CartContext } from "../App";
import "./ResultCard.css";

export const ResultCard = ({ data }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = (item) => {
    console.log("Item to add", item);
    const itemToAdd = {
      item: item,
      quantity: 1,
    };
    const removeFromCart = (item) => {
      const updatedCart = cartItems.filter((x) => x.item.id !== item.id);
      setCartItems(updatedCart);
    };
    const isAlreadyAdded = (item) => {
      return (
        cartItems.length !==
        cartItems.filter((x) => x.item.id !== item.id).length
      );
    };
    isAlreadyAdded(item)
      ? removeFromCart(item)
      : setCartItems(cartItems.concat(itemToAdd));
  };

  return (
    <div className="ResultCard">
      <div className="card-img-container">
        <img className="card-img" src={data.images.large} alt={data.name} />
      </div>
      <p className="card-name">{data.name ? data.name : "(Card name N/A)"}</p>
      <p className="card-rarity">
        {data.rarity ? data.rarity : "(Unknown Rarity)"}
      </p>
      <div className="card-sale-info">
        <span className="card-price">
          {data.cardmarket &&
          data.cardmarket.prices &&
          data.cardmarket.prices.averageSellPrice
            ? "$" + data.cardmarket.prices.averageSellPrice
            : "(N/A)"}
        </span>
        <span className="card-stock">
          {data.set && data.set.total
            ? data.set.total + " left"
            : "Out of stock"}
        </span>
      </div>
      <button
        className="select-card-btn"
        onClick={() => {
          addToCart(data);
        }}
      >
        Select Card
      </button>
    </div>
  );
};
