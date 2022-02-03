import React, { useEffect } from "react";
import "./SearchBar.css";
import { PKMN_TYPES } from "../_CONSTANTS/PKMN_TYPES";
import { RARITIES } from "../_CONSTANTS/RARITIES";
import { SET_LEGALITIES } from "../_CONSTANTS/SET_LEGALITIES";
import axios from "axios";

export const SearchBar = ({
  searchInput,
  setSearchInput,
  searchResults,
  setSearchResults,
  setFilterTypeValue,
  setFilterRarityValue,
  setFilterSetValue,
  setFilteredResults,
  filterTypeValue,
  filterRarityValue,
  filterSetValue,
  pageIndex,
  setPageIndex,
  endOfResults,
  setEndOfResults,
}) => {
  const requestSearch = async () => {
    console.log("Page index is: ", pageIndex);
    try {
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
          page: 1,
          pageSize: 12,
          orderBy: "name",
        },
      };
      const response = await axios(config);

      const results = await response.data.data;
      if (results.length < 12) {
        setEndOfResults(true);
      }
      setSearchResults(results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async () => {
    console.log("handleSearch");
    setEndOfResults(false);
    await requestSearch();
    setPageIndex(1);
  };

  //* ---LOGIC TO USE IF FILTER CANNOT BE DONE ON API---
  // const filterByType = (list, matcher) => {
  //   const filteredList = !!matcher
  //     ? list.filter(
  //         (x) =>
  //           !!x.types &&
  //           (x.types.includes(matcher.toLowerCase()) ||
  //             x.types.includes(matcher.toUpperCase()) ||
  //             x.types.includes(capFirstLetter(matcher)))
  //       )
  //     : list;
  //   console.log("Filter by type ", matcher, "=", filteredList);
  //   return filteredList;
  // };

  // const filterByRarity = (list, matcher) => {
  //   const filteredList = !!matcher
  //     ? list.filter(
  //         (x) => !!x.rarity && x.rarity.toLowerCase() === matcher.toLowerCase()
  //       )
  //     : list;
  //   console.log("Filter by rarity ", matcher, "=", filteredList);
  //   return filteredList;
  // };

  // const filterBySet = (list, matcher) => {
  //   const filteredList = !!matcher
  //     ? list.filter((x) => x.set.legalities[matcher.toLowerCase()] === "Legal")
  //     : list;
  //   console.log("Filter by set ", matcher, "=", filteredList);
  //   return filteredList;
  // };

  // const filterResults = (results) => {
  //   if (!!results) {
  //     results = filterByType(results, filterTypeValue);
  //     results = filterByRarity(results, filterRarityValue);
  //     results = filterBySet(results, filterSetValue);
  //     return results;
  //   }
  // };

  // useEffect(() => {
  //   // do api call here and set data
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchResults, filterTypeValue, filterRarityValue, filterSetValue]);

  useEffect(() => {
    console.log(filterTypeValue, filterRarityValue, filterSetValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTypeValue, filterRarityValue, filterSetValue]);

  return (
    <div className="SearchBar">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          className="search-input"
          size={25}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Name..."
        />
        <div className="filter-selects-container">
          <select
            className="filter-select filter-type-select"
            value={filterTypeValue}
            onChange={(e) => setFilterTypeValue(e.target.value)}
          >
            <option className="option-placeholder" value="" disabled>
              Type
            </option>
            <option className="option-item" value="">
              -any-
            </option>
            {PKMN_TYPES.map((type) => (
              <option
                key={type}
                className="option-item"
                value={type.toLowerCase()}
              >
                {type}
              </option>
            ))}
          </select>
          <select
            className="filter-select filter-rarity-select"
            value={filterRarityValue}
            onChange={(e) => setFilterRarityValue(e.target.value)}
          >
            <option className="option-placeholder" value="" disabled>
              Rarity
            </option>
            <option className="option-item" value="">
              -any-
            </option>
            {RARITIES.map((rarity) => (
              <option
                key={rarity}
                className="option-item"
                value={rarity.toLowerCase()}
              >
                {rarity}
              </option>
            ))}
          </select>
          <select
            className="filter-select filter-set-select"
            value={filterSetValue}
            onChange={(e) => setFilterSetValue(e.target.value)}
          >
            <option className="option-placeholder" value="" disabled>
              Set
            </option>
            <option className="option-item" value="">
              -any-
            </option>
            {SET_LEGALITIES.map((set) => (
              <option
                key={set}
                className="option-item"
                value={set.toLowerCase()}
              >
                {set}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
