import React, { useEffect, useState } from "react";
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
  endOfResults,
  setEndOfResults,
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
        `https://api.pokemontcg.io/v2/cards?q=name:"${searchInput}*"&orderBy=name&page=${pageIndex}&pageSize=12`
      );
      const results = response.data.data;
      if (results.length < 12) {
        setEndOfResults(true);
      }
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
        {!filteredResults.length && (
          <p>Start searching by entering a card name.</p>
        )}
        {!!filteredResults.length && (
          <button className="showmore-btn" onClick={() => handleShowMore()}>
            {endOfResults ? "No more items found." : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};
