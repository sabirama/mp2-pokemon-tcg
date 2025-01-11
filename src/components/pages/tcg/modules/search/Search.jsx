import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import request from '../../../../../lib/apiRequest';
import Card from '../../../../commons/card/Card';
import loader from '../../../../../assets/images/loader.gif';
import Pagination from '../../../../commons/pagination/Pagination';

function Search() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [havePagination, setHavePagination] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [startSearch, setStartSearch] = useState(false);

  useEffect(() => {
    const getCards = async function () {
      const { data } = await request.get(`/cards/?q=name:"*${startSearch || 'pokemon'}*"&page=${page}&pageSize=50`);
      if (data) {
        setCards(data?.data);
        setLoading(false);
        if (data?.totalItemCount > 50) {
          setHavePagination(true);
        } else {
          setHavePagination(false);
        }
      } else {
        setError('Failed fetching cards.');
      }
    };

    setLoading(true);
    setError(null);
    getCards();
  }, [startSearch, page]);

  return (
    <Container>
      <div className="d-flex justify-content-center p-2">
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input p-1 w-50"
          placeholder="search for a card eg. pokemon names like charizard and venusaur"
        />
        <button onClick={() => setStartSearch(searchValue)} className="p-1">
          SEARCH
        </button>
      </div>
      <div className="d-flex flex-wrap">
        {error ? (
          <h1>{error}</h1>
        ) : loading ? (
          <img src={loader} className="loader" />
        ) : cards.length === 0 ? (
          <h2>Search a card.</h2>
        ) : (
          cards.length > 0 && cards.map((card, key) => <Card key={key} card={card} />)
        )}
      </div>
      {havePagination ? <Pagination page={page} setPage={setPage} /> : null}
    </Container>
  );
}

export default Search;
