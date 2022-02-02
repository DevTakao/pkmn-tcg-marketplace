import React, { useEffect } from "react";
import "./SearchResults.css";
import { ResultCard } from "./ResultCard";
import axios from "axios";
import uniqueId from "lodash.uniqueid";

export const SearchResults = ({
  searchInput,
  searchResults,
  setSearchResults,
  filteredResults,
  pageIndex,
  setPageIndex,
}) => {
  const handleShowMore = async () => {
    console.log("Show more!");
    setPageIndex(pageIndex + 1);
  };

  useEffect(() => {
    if (pageIndex > 1) {
      requestNextPage(pageIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  const requestNextPage = async (pageIndex) => {
    try {
      console.log("Page index is: ", pageIndex);
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?q=name:${searchInput}*&orderBy=name&page=${pageIndex}&pageSize=12`
      );
      const results = response.data.data;
      setSearchResults(searchResults.concat(results));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="SearchResults">
      {!!filteredResults &&
        filteredResults.map((data) => (
          <ResultCard key={uniqueId() + "_" + data.id} data={data} />
        ))}
      <div className="showmore-btn-container">
        <button className="showmore-btn" onClick={() => handleShowMore()}>
          {"Show more"}
        </button>
      </div>
    </div>
  );
};
