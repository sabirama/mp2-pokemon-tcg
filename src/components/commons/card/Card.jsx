import {  useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardModal from './../card-modal/CardModal';

function Card({ card }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Container className="card-container px-3 py-2">
        <Row>
          <Col>
            <button onClick={() => setModal(true)}>
              <img src={card?.images?.large} alt="loading image" className="card-img" />
            </button>
          </Col>
          <Col className="d-flex flex-column card-details gap-1">
            <div className="d-flex flex-column">
              <strong>Card Type </strong>
              <small>{card?.supertype}</small>
            </div>

            <div className="d-flex flex-column">
              <strong>Card Set</strong>
              <small>{card?.set?.name}</small>
            </div>

            <div className="d-flex flex-column">
              <strong>Market Update</strong>
              <small>
                <span>TCG Player: </span>
                <Link to={card?.tcgplayer?.url}>{card?.tcgplayer?.updatedAt || 'NA'}</Link>
              </small>

              <small>
                <span>Card Market: </span>
                <Link to={card?.cardmarket?.url}>{card?.cardmarket?.updatedAt || 'NA'}</Link>
              </small>
            </div>

            <div className="d-flex flex-column">
              <strong>Artist</strong>
              <small>{card?.artist}</small>
            </div>
          </Col>
        </Row>
      </Container>

      <CardModal card={card} show={modal} setShow={setModal} />
    </>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
