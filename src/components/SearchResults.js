import React from "react";
import "./SearchResults.css";
import { _apiData } from "../_mocks/search_results";
import { ResultCard } from "./ResultCard";

export const SearchResults = () => {
  const apiData = _apiData;
  return (
    <div className="SearchResults">
      {apiData.data.map((data) => (
        <ResultCard key={data.id} data={data} />
      ))}
    </div>
  );
};
