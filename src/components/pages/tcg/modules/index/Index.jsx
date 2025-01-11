import { useEffect, useState } from 'react';
import Select from '../../../../commons/select/Select';
import Pagination from '../../../../commons/pagination/Pagination';
import request from '../../../../../lib/apiRequest';
import loader from '../../../../../assets/images/loader.gif';
import Card from '../../../../commons/card/Card';
import { Container } from 'react-bootstrap';

function Index() {
  const [order, setOrder] = useState('');
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCards() {
      try {
        const { data } = await request.get(`/cards/?orderBy=${order}&page=${page}&pageSize=50`);
        setCards(data.data);
      } catch {
        setError('Error: failed fetch');
      }

      setLoading(false);
    }

    setError(null);
    setLoading(true);
    getCards();
  }, [order, page]);

  return (
    <main>
      <Select
        handler={(e) => {
          setPage(1);
          setOrder(e.target.value);
        }}
        options={{
          name: 'order-set',
          values: ['number', 'name', 'national-dex-number', 'card-set', 'hp', 'types'],
        }}
      />

      {loading ? (
        <div>
          <img src={loader} className="loader" />
        </div>
      ) : error ? (
        <div>ERROR</div>
      ) : cards ? (
        <Container className="d-flex justify-content-center flex-wrap">
          {cards.map((card, key) => (
            <Card key={key} card={card} />
          ))}
        </Container>
      ) : null}
      <Pagination page={page} setPage={setPage} />
    </main>
  );
}

export default Index;
