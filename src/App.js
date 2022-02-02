import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { TopHeader } from "./components/TopHeader";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
