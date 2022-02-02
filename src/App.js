import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { TopHeader } from "./components/TopHeader";
import { ViewCartButton } from "./components/ViewCartButton";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterTypeValue, setFilterTypeValue] = useState("");
  const [filterRarityValue, setFilterRarityValue] = useState("");
  const [filterSetValue, setFilterSetValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [endOfResults, setEndOfResults] = useState(false);

  useEffect(() => {
    console.log("Search results", searchResults);
  }, [searchResults]);

  return (
    <div className="App">
      <TopHeader />
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        filterTypeValue={filterTypeValue}
        filterRarityValue={filterRarityValue}
        filterSetValue={filterSetValue}
        setFilterTypeValue={setFilterTypeValue}
        setFilterRarityValue={setFilterRarityValue}
        setFilterSetValue={setFilterSetValue}
        setFilteredResults={setFilteredResults}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        endOfResults={endOfResults}
        setEndOfResults={setEndOfResults}
      />
      <SearchResults
        searchInput={searchInput}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        filterTypeValue={filterTypeValue}
        filterRarityValue={filterRarityValue}
        filterSetValue={filterSetValue}
        filteredResults={filteredResults}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        endOfResults={endOfResults}
        setEndOfResults={setEndOfResults}
      />
      <ViewCartButton />
    </div>
  );
}

export default App;
