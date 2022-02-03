import React, { useEffect } from "react";
import "./SearchResults.css";
import { ResultCard } from "./ResultCard";
import axios from "axios";
import uniqueId from "lodash.uniqueid";

export const SearchResults = ({
  searchInput,
  searchResults,
  setSearchResults,
  filterTypeValue,
  filterRarityValue,
  filterSetValue,
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

  const requestNextPage = async (pageIndex) => {
    try {
      console.log("Page index is: ", pageIndex);
      const config = {
        method: "get",
        url: "https://api.pokemontcg.io/v2/cards",
        headers: {},
        params: {
          q: `name:"*${searchInput}*" ${
            filterTypeValue ? "types:" + filterTypeValue : ""
          } ${filterRarityValue ? '!rarity:"' + filterRarityValue + '"' : ""} ${
            filterSetValue ? "legalities." + filterSetValue + ":legal" : ""
          }`,
          page: pageIndex,
          pageSize: 12,
          orderBy: "name",
        },
      };
      const response = await axios(config);
      const results = response.data.data;
      setSearchResults(searchResults.concat(results));
      if (results.length < 12) {
        setEndOfResults(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (pageIndex > 1) {
      requestNextPage(pageIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  useEffect(() => {
    if (!searchResults.length) {
      setEndOfResults(true);
    } else {
      setEndOfResults(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  return (
    <div className="SearchResults">
      {!!searchResults &&
        searchResults.map((data) => (
          <ResultCard key={uniqueId() + "_" + data.id} data={data} />
        ))}
      <div className="showmore-btn-container">
        {searchResults.length ? (
          <button className="showmore-btn" onClick={() => handleShowMore()}>
            {endOfResults ? "No more items found." : "Show more"}
          </button>
        ) : (
          <p>Start searching by entering a card name.</p>
        )}
      </div>
    </div>
  );
};
