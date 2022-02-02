import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { TopHeader } from "./components/TopHeader";
import { ViewCartButton } from "./components/ViewCartButton";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <SearchBar />
      <SearchResults />
      <ViewCartButton />
    </div>
  );
}

export default App;
