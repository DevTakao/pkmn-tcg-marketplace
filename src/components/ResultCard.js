import React from "react";
import "./ResultCard.css";

export const ResultCard = ({ data }) => {
  return (
    <div className="ResultCard">
      <div className="card-img-container">
        <img className="card-img" src={data.images.large} alt={data.name} />
      </div>
      <p className="card-name">{data.name}</p>
      <p className="card-rarity">{data.rarity}</p>
      <div className="card-sale-info">
        <span className="card-price">
          {"$" + data.cardmarket.prices.averageSellPrice}
        </span>
        <span className="card-stock">{data.set.total + " left"}</span>
      </div>
      <button className="select-card-btn">Select Card</button>
    </div>
  );
};
