import { createContext, useEffect, useState } from "react";
import "./App.css";
import { CartModal } from "./components/CartModal";
import { PaySuccessModal } from "./components/PaySuccessModal";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { TopHeader } from "./components/TopHeader";
import { ViewCartButton } from "./components/ViewCartButton";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});
//* CAN BE USED TO ADD DYNAMIC CSS IN JS
export const WindowSizeContext = createContext({ width: 0, height: 0 });

function App() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterTypeValue, setFilterTypeValue] = useState("");
  const [filterRarityValue, setFilterRarityValue] = useState("");
  const [filterSetValue, setFilterSetValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [endOfResults, setEndOfResults] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [payDone, setPayDone] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleSetWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleSetWindowSize);
  }, []);

  useEffect(() => {
    console.log("Search results", searchResults);
  }, [searchResults]);

  useEffect(() => {
    console.log("Updated cart items: ", cartItems);
  }, [cartItems]);

  useEffect(() => {
    console.log("End of results: ", endOfResults);
  }, [endOfResults]);

  return (
    <WindowSizeContext.Provider value={windowSize}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
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
          {!openCart && <ViewCartButton setOpenCart={setOpenCart} />}
          {!!openCart && (
            <CartModal setOpenCart={setOpenCart} setPayDone={setPayDone} />
          )}
          {!!payDone && <PaySuccessModal setPayDone={setPayDone} />}
        </div>
      </CartContext.Provider>
    </WindowSizeContext.Provider>
  );
}

export default App;
