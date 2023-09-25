import { useState } from "react";
import request from "../../../../../lib/request";
import CardsDisplay from "./CardsDisplay";
import "./CardSearch.css";

const CardSearch = () => {
  const [cards, setCards] = useState([]);
  const [exact, setExact] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const params = `/?q=${!exact ? "!" : ""}name:"${searchValue}"`;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const message = "No results were found for search.";

  // search nput value
  function newValue(e) {
    setSearchValue(e.target.value);
  }

  // card exact search toggle
  function checkToggle() {
    setExact(!exact);
  }

  function onClickHandler() {
    setLoading(true);
    getCardsByQuery();
  }

  // api fetch of cards by query
  async function getCardsByQuery() {
    setError(null);
    try {
      const { data } =
        searchValue == ""
          ? null
          : await request.get(
              `/cards${!setSearchValue.length == 0 ? params : ""}`
            );

      setCards(data.data);
    } catch (error) {
      setError("Error: failed fetch");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={newValue}
          value={searchValue}
          className="search-bar"
          placeholder="search for a card eg. pokemon names like charizard and venusaur"
        />
        <div className="search-button-container">
          <span className="search-check-box">
            <input type="checkbox" onChange={checkToggle} />
            <span className="checkbox-text"> Exact</span>
          </span>
          <button onClick={onClickHandler} className="search-button">
            Search
          </button>
        </div>
      </div>

      {searchValue == "" ? (
        <p className="take-action-text">Please search a Card.</p>
      ) : (
        CardsDisplay(loading, error, cards, null, message)
      )}
    </>
  );
};

export default CardSearch;
