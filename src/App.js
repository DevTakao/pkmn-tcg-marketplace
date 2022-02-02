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
  const [pageIndex, setPageIndex] = useState(1);

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
      />
      <SearchResults
        searchInput={searchInput}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        filteredResults={filteredResults}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
      <ViewCartButton />
    </div>
  );
}

export default App;
