import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { TopHeader } from "./components/TopHeader";
import { ViewCartButton } from "./components/ViewCartButton";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [endOfResults, setEndOfResults] = useState(false);

  return (
    <div className="App">
      <TopHeader />
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
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
