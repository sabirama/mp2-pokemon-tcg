import request from "../../../../../lib/request";
import { useState, useEffect } from "react";
import splash from "../../../../../assets/images/splash.gif";
import CardIndividual from "../CardIndividual";
import { Button } from "react-bootstrap";
import "./CardAll.css";

const CardAll = () => {
  const [page, setPage] = useState(1);
  const [cards, setCardsAll] = useState([]);
  const [loading, setLoadingCardAll] = useState(true);
  const [error, setErrorcardAll] = useState(null);
  const [order, setOrder] = useState("");
  const [toShow, setToShow] = useState(0);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  // fullscreen modal
  const handleShow = (e) => {
    setFullscreen(true);
    setToShow(e.target.value);
    setShow(true);
  };

  function orderSetter(e) {
    setOrder(e.target.value);
    setPage(1);
  }

  // element on input method
  function handleChange(e) {
    setPage(Number(e.target.value));
  }

  //pagination methods
  function previousPage() {
    page == 1 ? setPage(1) : setPage(page - 1);
  }

  function nextPage() {
    page == 68 ? setPage(68) : setPage(page + 1);
  }

  //fetch request
  async function getCards() {
    try {
      const { data } = await request.get(
        `/cards/?orderBy=${order}&page=${page}&pageSize=250&`
      );
      setCardsAll(data.data);
    } catch {
      setErrorcardAll("Error: failed fetch");
    }

    setLoadingCardAll(false);
  }

  useEffect(() => {
    setErrorcardAll(null);
    setLoadingCardAll(true);
    getCards();
  }, [order, page]);

  return (
    // order setter
    <>
      <h4 className="order-main-label">Order by {order}</h4>
      <div className="order-radio-container">
        <div className="radio-container">
          <input
            type="radio"
            name="order-set"
            value="number"
            onClick={orderSetter}
          />
          <span>Number</span>
        </div>

        <div className="radio-container">
          <input
            type="radio"
            name="order-set"
            value="name"
            onClick={orderSetter}
          />
          <span>Name</span>
        </div>

        <div className="radio-container">
          <input
            type="radio"
            name="order-set"
            value="nationalPokedexNumbers"
            onClick={orderSetter}
          />
          <span>By National Pokedex Number</span>
        </div>

        <div className="radio-container">
          <input
            type="radio"
            name="order-set"
            value="set"
            onClick={orderSetter}
          />
          <span>Set</span>
        </div>

        <div className="radio-container">
          <input
            type="radio"
            name="order-set"
            value="hp"
            onClick={orderSetter}
          />
          <span>HP</span>
        </div>

        <div className="radio-container">
          <input
            type="radio"
            name="order-set"
            value="types"
            onClick={orderSetter}
          />
          <span>Type</span>
        </div>
      </div>

      {/* end of order setter */}

      {/* paging */}
      <div className="page-button-container">
        <button
          className="card-nav-button-prev"
          onClick={previousPage}
        ></button>

        <div className="page-input-container">
          <p className="page-input-label">PAGE</p>
          <input
            name="page-input"
            type="number"
            value={page}
            className="page-number-input"
            onInput={handleChange}
          />
        </div>
        <button className="card-nav-button-next" onClick={nextPage}></button>
      </div>
      {loading ? (
        <div className="cardsall-loading-container">
          <img src={splash} alt="" />
          <p className="cardsall-loading-text">
            Fetching data. Please wait for a little while.
          </p>
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : cards ? (
        <div className="card-display">
          <div className="card-container">
            {cards.map((card, index) => {
              return (
                <span key={index} className="card-item">
                  <div className="card-text">
                    <p className="card-page-number">{index + 1}</p>
                    <p className="card-id">{card.name}</p>
                    <p className="card-set">{card.set.name}</p>
                  </div>
                  <div className="individual-card-container">
                    <img src={card.images.small} className="card-image" />
                    <Button
                      variant="primary"
                      onClick={handleShow}
                      value={card.id}
                    >
                      Card Details
                    </Button>
                  </div>
                </span>
              );
            })}
          </div>
          <CardIndividual
            show={show}
            setShow={setShow}
            toShow={toShow}
            fullscreen={fullscreen}
          />
          ;
        </div>
      ) : null}
    </>
  );
};

export default CardAll;
