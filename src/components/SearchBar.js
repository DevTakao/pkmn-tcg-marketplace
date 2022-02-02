import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { PKMN_TYPES } from "../constants/PKMN_TYPES";
import { RARITIES } from "../constants/RARITIES";
import { SET_LEGALITIES } from "../constants/SET_LEGALITIES";

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);

  return (
    <div className="SearchBar">
      <form
        onSubmit={() => {
          console.log("Form submitted.");
        }}
        action=""
      >
        <input
          className="search-input"
          size={25}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <select className="filter-type-select" defaultValue={"_placeholder"}>
          <option className="option-placeholder" value="_placeholder" disabled>
            Type
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
        <select className="filter-rarity-select" defaultValue={"_placeholder"}>
          <option className="option-placeholder" value="_placeholder" disabled>
            Rarity
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
        <select className="filter-set-select" defaultValue={"_placeholder"}>
          <option className="option-placeholder" value="_placeholder" disabled>
            Set
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
