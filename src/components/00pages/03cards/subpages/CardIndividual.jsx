/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import request from "../../../../lib/request";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardIndividual.css";

function IndividualCard(props) {
  const [card, setCard] = useState([]);

  async function getCard() {
    const { data } = await request.get(`/cards/?q=id:${props.toShow}`);
    setCard(data.data);
    console.log(card);
  }

  useEffect(() => {
    getCard();
  }, [props.toShow]);

  return (
    <>
      {card.length == 1 ? (
        <Modal
          show={props.show}
          fullscreen={props.fullscreen}
          onHide={() => props.setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Card Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="d-flex m-0">
              <Row>
                <Col className="sm-12 pb-5">
                  <img src={card[0].images.large} alt="" className="px-5" />
                </Col>

                <Col className="sm-12">
                  <h4 className="my-3">From: {card[0].set.name} set</h4>
                  <h4 className="my-3">Card Name: {card[0].name}</h4>
                  <h4 className="my-3">Card Type: {card[0].supertype}</h4>
                  <h5 className="my-2">Card Sub type: {card[0].subtypes}</h5>
                  <h4>
                    Rarity: <small>{card[0].rarity}</small>
                  </h4>

                  {/* Conditional by supertypes */}
                  {card[0].supertype == "Pokémon" ? (
                    <>
                      <h4 className="my-3">
                        National Pokedex Number:{" "}
                        {card[0].nationalPokedexNumbers}
                      </h4>
                      <h4 className="my-3">
                        Retreat Cost: {String(card[0].retreatCost)} /{" "}
                        {card[0].convertedRetreatCost}
                      </h4>
                      <h4 className="my-3">Type:</h4>
                      {card[0].types.map((item, index) => {
                        return (
                          <p key={index} className="px-3">
                            {item},
                          </p>
                        );
                      })}

                      <h4 className="my-3">Weaknesses</h4>
                      <Container>
                        <p>{card[0].weaknesses[0].type}</p>
                      </Container>
                      <>
                        <Container className="p-0">
                          {card[0].hasOwnProperty("resistances") == true ? (
                            <>
                              <h4 className="my-3">Resistance</h4>
                              {card[0].resistances.map((item, index) => {
                                return (
                                  <p key={index} className="px-3">
                                    {item.type}, {item.value}
                                  </p>
                                );
                              })}
                            </>
                          ) : null}
                        </Container>
                      </>
                    </>
                  ) : (
                    <>
                      <h4>
                        Rules:
                        {card[0].rules.map((item, index) => {
                          return (
                            <p key={index}>
                              {index + 1}. {item}
                            </p>
                          );
                        })}
                      </h4>
                    </>
                  )}

                  <Container className="px-0 py-4">
                    <h4>Market: </h4>

                    {card[0].hasOwnProperty("cardmarket") == true ? (
                      <Link to={card[0].cardmarket.url}>
                        <h4>
                          <span>Cardmarket </span>
                          <span>
                            ( updated last: {card[0].cardmarket.updatedAt})
                          </span>
                        </h4>
                      </Link>
                    ) : null}

                    {card[0].hasOwnProperty("tcgplayer") == true ? (
                      <Link to={card[0].tcgplayer.url}>
                        <h4>
                          <span>Tcgplayer </span>
                          <span>
                            (updated last: {card[0].tcgplayer.updatedAt})
                          </span>
                        </h4>
                      </Link>
                    ) : null}
                  </Container>

                  <h5>Artist: {card[0].artist}</h5>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default IndividualCard;
