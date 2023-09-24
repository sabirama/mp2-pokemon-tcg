import request from "../../../../../lib/request";
import { useState, useEffect } from "react";

const CardSet = () => {
  let [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // element on input method
  function handleChange(e) {
    setPage(Number(e.target.value));
  }

  function handleClick() {
    setLoading(true);
    getCards();
  }

  //pagination methods
  async function previousPage() {
    page == 1 ? setPage((page += 66)) : setPage((page -= 1));
    setLoading(true);
    getCards();
  }

  async function nextPage() {
    page == 67 ? setPage((page -= 66)) : setPage((page += 1));
    setLoading(true);
    getCards();
  }

  useEffect(() => {
    getCards();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //fetch request
  async function getCards() {
    const { data } = await request.get(`/cards?page=${page}&pageSize=250`);

    try {
      setCards(data.data);
      setLoading(false);
    } catch {
      setError("Error: failed fetch");
      setLoading(false);
    }
  }

  return (
    <>
      <div className="button-container">
        <button className="card-nav-button-prev" onClick={previousPage}>
          PREVIOUS PAGE
        </button>

        <button onClick={handleClick} className="page-input-button">
          <input
            type="number"
            value={page}
            className="page-number-input"
            onInput={handleChange}
          />
        </button>
        <button className="card-nav-button-next" onClick={nextPage}>
          NEXT PAGE
        </button>
      </div>
      {loading ? (
        <p className="loading-text">
          Loading data. Please wait for a little while.
        </p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : cards ? (
        <div className="card-display">
          <div className="card-container">
            {cards.map((card, index) => {
              return (
                <span key={index} className="card-item">
                  <div className="card-text">
                    <p className="card-page-number">
                      {index + 1 + 250 * (page - 1)}
                    </p>

                    <p className="card-id">{card.name}</p>
                  </div>
                  <a href="">
                    <img
                      src={card.images.small}
                      alt=""
                      className="card-image"
                    />
                  </a>
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardSet;
