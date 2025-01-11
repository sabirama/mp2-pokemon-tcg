import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CardModal.css';
import { useEffect, useState } from 'react';
function CardModal({ card, show, setShow }) {
  const [classUpdate, setClassUpdate] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (classUpdate === 'modal-hidden') {
        setShow(false);
        setClassUpdate('');
      }
    }, 1200);
  }, [classUpdate, setShow]);

  return show ? (
    <Container className={`modal-container ${classUpdate}`}>
      <header>
        <h4>Card Details</h4>
        <button onClick={() => setClassUpdate('modal-hidden')} className="modal-btn-close">
          X
        </button>
      </header>
      <Row>
        <Col className="col-md-7 col-lg-5 col-sm-12">
          <img src={card?.images?.large} className="modal-card" />
        </Col>
        <Col className="col-md-5 col-lg-6 col-sm-12 px-4">
          <div>
            <strong>Card Name</strong>: <small>{card?.name}</small>
          </div>

          <div>
            <strong>Card Type</strong>: <small>{card?.supertype}</small>
          </div>

          <div>
            <strong>Card Sub-type</strong>: <small>{card?.subtypes?.join(', ')}</small>
          </div>

          <div>
            <strong>Card Rarity</strong>: <small>{card?.rarity}</small>
          </div>
          <div>
            <strong>Card Set</strong>: <small>{card?.set?.name}</small>
          </div>

          <div>
            <strong>Legalities</strong>:{' '}
            <small>
              {card?.legalities &&
                Object.keys(card?.legalities).map((key) => (
                  <div key={key} className="px-3">
                    {key.toUpperCase()}: {card?.legalities[key]}
                  </div>
                ))}
            </small>
          </div>

          <div>
            <strong>SET</strong>: <small>{card?.set?.name}</small>
          </div>

          <div>
            <strong>Artist</strong>: <small>{card?.artist}</small>
          </div>
          <div>
            <strong>Market</strong>
            <p>
              TCG Player : <Link to={card?.tcgplayer?.url}>{card?.tcgplayer?.updatedAt || 'NA'}</Link>
            </p>
            <p>
              Card Market: <Link to={card?.cardmarket?.url}>{card?.cardmarket?.updatedAt || 'NA'}</Link>
            </p>
          </div>
          
          <>
        {card.supertype === 'Pokémon' ? (
          <>
            <div>
              <strong>Pokemon Types</strong>: <small>{card?.types?.join(', ')}</small>
            </div>
            <div>
              <strong>Weakness</strong>:{' '}
              <small>
                {card?.weaknesses?.map((weakness) => (
                  <>
                    {weakness?.type}({weakness?.value}),
                  </>
                ))}
              </small>
            </div>
            <div>
              <strong>Retreat Cost</strong>: <small>{card?.retreatCost?.join(', ')}</small>
            </div>
            <div>
              <strong>Attacks</strong>
              {card?.attacks?.map((attack, key) => (
                <div key={key} className="px-4">
                  <p>
                    <em>{attack?.name}</em>
                  </p>
                  <p>
                    <em> Cost:</em> <small>{attack?.cost?.join(', ')}</small>
                  </p>
                  <p>
                    <em>damage:</em> <small>{attack?.damage}, </small>
                  </p>
                  <p>{attack?.text}</p>
                </div>
              ))}
            </div>
            <div>
              <strong>{card?.flavorText}</strong>
            </div>
          </>
        ) : card.supertype === 'Trainer' ? (
          <>
            <div>
              <strong>Rules</strong>:
              {card.rules.map((rule, key) => (
                <p key={key}>{rule}</p>
              ))}
            </div>
          </>
        ) : null}
      </>
        </Col>
       
      </Row>
    </Container>
  ) : null;
}

CardModal.propTypes = {
  card: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
};

export default CardModal;
