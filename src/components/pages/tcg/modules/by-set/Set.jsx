import { useEffect, useState, useRef } from 'react';
import request from '../../../../../lib/apiRequest';
import loader from '../../../../../assets/images/loader.gif';
import { Container } from 'react-bootstrap';
import SetCards from './modules/SetCards';
import './Set.css';

function Set() {
  const [sets, setSets] = useState([]);
  const [displaySet, setDisplaySet] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    async function getSets() {
      const { data } = await request.get('/sets/?orderBy=set');
      if (data) {
        setSets(data.data);
        setLoading(false);
      } else {
        setError('Failed fetching cards.');
      }
    }

    const handleScroll = (event) => {
      event.preventDefault();
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += event.deltaY;
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('wheel', handleScroll);
    }

    setLoading(true);
    setError(null);
    getSets();

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <Container className="d-flex flex-column gap-4">
      <div className="d-flex scroll" ref={scrollRef}>
        {sets.map((set, index) => {
          return (
            <div key={index} className="set-link">
              <button onClick={() => setDisplaySet(set)} className="set-view-btn">
                <img src={set.images.logo} alt="" className="set-logo" />
              </button>
            </div>
          );
        })}
      </div>

      <div>
        {error ? (
          <div>
            <h2>{error}</h2>
          </div>
        ) : loading ? (
          <div>
            <img src={loader} className="loader" />
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-center">
              <img
                src={displaySet?.images?.symbol || 'https://images.pokemontcg.io/base1/symbol.png'}
                className="set-symbol"
              />
              <h3>{displaySet?.name?.toUpperCase() || 'BASE'}</h3>
            </div>
            <SetCards setId={displaySet?.id || 'base1'} />
          </>
        )}
      </div>
    </Container>
  );
}

export default Set;
