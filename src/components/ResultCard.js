import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import "./ResultCard.css";

export const ResultCard = ({ data }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [disableSelect, setDisableSelect] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

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

  const hasBadData = (data) => {
    data.images.large &&
    data.name &&
    data.rarity &&
    data.cardmarket &&
    data.cardmarket.prices &&
    data.cardmarket.prices.averageSellPrice &&
    data.set &&
    data.set.total
      ? setDisableSelect(false)
      : setDisableSelect(true);
  };

  useEffect(() => {
    hasBadData(data);
  }, [data]);

  useEffect(() => {
    !!cartItems.filter((item) => item.item.id === data.id).length
      ? setSelectedCard("selected-card")
      : setSelectedCard("");
  }, [cartItems, data.id]);

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
        className={`select-card-btn ${selectedCard}`}
        onClick={() => {
          addToCart(data);
        }}
        disabled={disableSelect}
      >
        {!!selectedCard ? "Selected" : "Select Card"}
      </button>
    </div>
  );
};
