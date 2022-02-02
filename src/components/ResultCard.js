import React, { useContext, useEffect, useState } from "react";
import { WindowSizeContext } from "../App";
import "./ResultCard.css";

export const ResultCard = ({ data }) => {
  const windowSize = useContext(WindowSizeContext);
  const [cardMt, setCardMt] = useState("0px");
  useEffect(() => {
    const cardElement = document.getElementsByClassName("card-img")[0];
    setCardMt(parseFloat(getComputedStyle(cardElement).height) + "px");
  }, [windowSize]);

  return (
    <div className="ResultCard" style={{ marginTop: cardMt }}>
      <div className="card-img-container">
        <img className="card-img" src={data.images.large} alt={data.name} />
      </div>
      <p className="card-name">{data.name ? data.name : "(Card name N/A)"}</p>
      <p className="card-rarity">
        {data.rarity ? data.rarity : "(Unknown Rarity)"}
      </p>
      <div className="card-sale-info">
        <span className="card-price">
          {data.cardmarket && data.cardmarket.prices
            ? "$" + data.cardmarket.prices.averageSellPrice
            : "(N/A)"}
        </span>
        <span className="card-stock">
          {data.set && data.set.total
            ? data.set.total + " left"
            : "Out of stock"}
        </span>
      </div>
      <button className="select-card-btn">Select Card</button>
    </div>
  );
};
