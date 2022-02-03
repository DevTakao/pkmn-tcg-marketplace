import React from "react";
import "./CartModal.css";
import { _apiData } from "../_mocks/search_results.js";
import uniqueId from "lodash.uniqueid";

export const CartModal = () => {
  const data = _apiData.data.slice(0, 4);
  console.log(data);
  return (
    <div className="CartModal">
      <div className="cart-item-area">
        <div className="cart-item-list">
          {data.map((item) => (
            <div key={uniqueId() + "_" + item.id} className="cart-item">
              <div className="item-img-container">
                <img
                  className="item-img"
                  src={item.images.small}
                  alt={item.name}
                />
              </div>
              <div className="stock-info-container">
                <p className="item-name">
                  {item.name ? item.name : "Card Name N/A"}
                </p>
                <p className="item-price">
                  {item.cardmarket && item.cardmarket.prices ? (
                    <span className="text-thicker">
                      ${item.cardmarket.prices.averageSellPrice}
                    </span>
                  ) : (
                    "N/A"
                  )}{" "}
                  per card
                </p>
                <p className="item-instock text-grey">
                  {item.set && !!item.set.total ? (
                    <span className="text-red text-thicker">
                      {item.set.total}
                    </span>
                  ) : (
                    "0"
                  )}{" "}
                  cards left
                </p>
              </div>
              <div className="order-info-container">
                <div className="order-quantity-container text-blue">
                  <span className="order-quantity-number text-thicker">2</span>
                  <div className="order-quantity-controls">
                    <span className="order-quantity-control order-quantity-inc">
                      ^
                    </span>
                    <span className="order-quantity-control order-quantity-dec">
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
          <button className="clear-cart-btn text-grey">Clear all</button>
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
      <button className="close-cart-btn">X</button>
    </div>
  );
};
