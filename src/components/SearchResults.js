import React from "react";
import "./SearchResults.css";
import { ResultCard } from "./ResultCard";

export const SearchResults = ({ searchResults, filteredResults }) => {
  return (
    <div className="SearchResults">
      {!!filteredResults &&
        filteredResults.map((data) => <ResultCard key={data.id} data={data} />)}
      <div className="showmore-btn-container">
        <button className="showmore-btn">Show more</button>
      </div>
    </div>
  );
};
