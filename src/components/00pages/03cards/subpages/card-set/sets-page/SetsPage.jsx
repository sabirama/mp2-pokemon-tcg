/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import request from "../../../../../../lib/request";
import { Link } from "react-router-dom";
import "./SetsPage.css";
import splash from "../../../../../../assets/images/splash.gif";

const SetsPage = (props) => {
  const [cards, setCards] = useState([]);
  const [setId, setSetId] = useState("ecard1");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getCards() {
    setLoading(true);
    setError(null);
    try {
      const { data } = await request.get(`/cards/?q=set.id:${setId}`);
      setCards(data.data);
      setLoading(false);
    } catch {
      setError("Error: failed to retrieve cards");
      setLoading(false);
    }
  }

  useEffect(() => {
    setSetId(props.id);
  }, [props.id]);

  useEffect(() => {
    getCards();
  }, [setId]);

  return (
    <div className="sets-cards-display">
      {cards.length > 0 ? (
        <div className="cards-display-header">
          <img src={cards[0].set.images.logo} alt="" />
          <h1>{cards[0].set.name}</h1>
        </div>
      ) : (
        <h1>Select a set</h1>
      )}

      <div>
        {loading ? (
          <div className="sets-loading-container">
            <img src={splash} alt="" className="sets-loading-img" />
            <p className="sets-loading-text">
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
                    </div>
                    <Link to="">
                      <img
                        src={card.images.small}
                        alt=""
                        className="card-image"
                      />
                    </Link>
                  </span>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SetsPage;
