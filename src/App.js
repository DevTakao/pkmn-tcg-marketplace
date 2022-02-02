import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { TopHeader } from "./components/TopHeader";
import { ViewCartButton } from "./components/ViewCartButton";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  return (
    <div className="App">
      <TopHeader />
      <SearchBar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setFilteredResults={setFilteredResults}
      />
      <SearchResults
        searchResults={searchResults}
        filteredResults={filteredResults}
      />
      <ViewCartButton />
    </div>
  );
}

export default App;
