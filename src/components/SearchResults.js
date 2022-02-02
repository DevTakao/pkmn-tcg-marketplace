import React from "react";
import "./SearchResults.css";
import { _apiData } from "../_mocks/search_results";
import { ResultCard } from "./ResultCard";

export const SearchResults = ({ searchResults, filteredResults }) => {
  const apiData = _apiData;
  return (
    <div className="SearchResults">
      {/* {apiData.data.map((data) => (
        <ResultCard key={data.id} data={data} />
      ))} */}
      {filteredResults.map((data) => (
        <ResultCard key={data.id} data={data} />
      ))}
      <div className="showmore-btn-container">
        <button className="showmore-btn">Show more</button>
      </div>
    </div>
  );
};
