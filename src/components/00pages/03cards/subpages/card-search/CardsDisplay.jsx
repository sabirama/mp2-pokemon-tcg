import { Link } from "react-router-dom";
import splash from "../../../../../assets/images/splash.gif";
import "./CardDisplay.css";

function CardsDisplay(load, err, card, clickEvent, nomatchmessage) {
  return (
    <>
      {load ? (
        <>
          <img src={splash} className="fetch-img" />
          <p className="fetch-text">fetching data...</p>
        </>
      ) : err ? (
        <>
          <p className="failed-fetch-text">failed to fetch data.</p>
          <span className="error-img">
            <img src="" alt="" />
          </span>
        </>
      ) : card ? (
        card.length == 0 ? (
          <p className="take-action-text">{nomatchmessage}</p>
        ) : (
          <>
            <p>{card.length} items in this page</p>
            <div className="cards-display">
              <div className="card-container">
                {card.map((card, index) => {
                  return (
                    <span key={index} className="card-item">
                      <span className="card-detail">
                        <p className="card-name">{card.name}</p>
                        <p className="set-name">{card.set.name}</p>
                      </span>
                      <Link
                        to={card.name}
                        className="card-link"
                        onClick={clickEvent}
                      >
                        <img
                          src={card.images ? card.images.small : ""}
                          alt=""
                          className="card-image"
                        />
                      </Link>
                    </span>
                  );
                })}
              </div>
            </div>
          </>
        )
      ) : null}
    </>
  );
}

export default CardsDisplay;
