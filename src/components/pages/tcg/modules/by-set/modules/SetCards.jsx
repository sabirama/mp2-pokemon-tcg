import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import request from '../../../../../../lib/apiRequest';
import loader from '../../../../../../assets/images/loader.gif';
import Card from './../../../../../commons/card/Card';

function SetCards({ setId }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCards() {
      try {
        const { data } = await request.get(`/cards/?q=set.id:${setId}`);
        setCards(data.data);
        setLoading(false);
      } catch {
        setError('Error: failed to retrieve cards');
      }
    }
    setLoading(true);
    setError(null);
    getCards();
  }, [setId]);

  return (
    <div>
      {loading ? (
        <div className="sets-loading-container">
          <img src={loader} className="loader" />
          <p className="sets-loading-text">Fetching data. Please wait for a little while.</p>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : cards ? (
        <div className="card-display d-flex flex-wrap justify-content-center">
          {cards?.length > 0 && cards?.map((card, key) => {
            return (
              <Card card={card} key={key}/>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

SetCards.propTypes = {
  setId: PropTypes.string.isRequired,
};
export default SetCards;
