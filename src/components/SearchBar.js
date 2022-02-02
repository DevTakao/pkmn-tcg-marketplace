import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { PKMN_TYPES } from "../_CONSTANTS/PKMN_TYPES";
import { RARITIES } from "../_CONSTANTS/RARITIES";
import { SET_LEGALITIES } from "../_CONSTANTS/SET_LEGALITIES";
import { capFirstLetter } from "../utils/capFirstLetter";
import axios from "axios";

export const SearchBar = ({
  searchInput,
  setSearchInput,
  searchResults,
  setSearchResults,
  setFilteredResults,
  pageIndex,
  setPageIndex,
}) => {
  const [filterTypeValue, setFilterTypeValue] = useState("");
  const [filterRarityValue, setFilterRarityValue] = useState("");
  const [filterSetValue, setFilterSetValue] = useState("");

  const requestSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?q=name:${query}*&orderBy=name&page=${1}&pageSize=12`
      );
      const results = response.data.data;
      return results;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async (searchInput) => {
    setPageIndex(1);
    const results = await requestSearch(searchInput);
    // const results = _apiData.data;
    setSearchResults(results);
  };

  const filterByType = (list, matcher) => {
    const filteredList = !!matcher
      ? list.filter(
          (x) =>
            !!x.types &&
            (x.types.includes(matcher.toLowerCase()) ||
              x.types.includes(matcher.toUpperCase()) ||
              x.types.includes(capFirstLetter(matcher)))
        )
      : list;
    console.log("Filter by type ", matcher, "=", filteredList);
    return filteredList;
  };

  const filterByRarity = (list, matcher) => {
    const filteredList = !!matcher
      ? list.filter(
          (x) => !!x.rarity && x.rarity.toLowerCase() === matcher.toLowerCase()
        )
      : list;
    console.log("Filter by rarity ", matcher, "=", filteredList);
    return filteredList;
  };

  const filterBySet = (list, matcher) => {
    const filteredList = !!matcher
      ? list.filter((x) => x.set.legalities[matcher.toLowerCase()] === "Legal")
      : list;
    console.log("Filter by set ", matcher, "=", filteredList);
    return filteredList;
  };

  const filterResults = (results) => {
    if (!!results) {
      results = filterByType(results, filterTypeValue);
      results = filterByRarity(results, filterRarityValue);
      results = filterBySet(results, filterSetValue);
      return results;
    }
  };

  useEffect(() => {
    const filteredResults = filterResults(searchResults);
    setFilteredResults(filteredResults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults, filterTypeValue, filterRarityValue, filterSetValue]);

  return (
    <div className="SearchBar">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchInput);
        }}
        // action="javascript:void"
      >
        <input
          className="search-input"
          size={25}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Name..."
        />
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
            <option key={set} className="option-item" value={set.toLowerCase()}>
              {set}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
