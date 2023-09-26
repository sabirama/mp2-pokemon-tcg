import splash from "../../../../../assets/images/splash.gif";
import { Button } from "react-bootstrap";
import "./CardDisplay.css";

function CardsDisplay(load, err, card, handleShow) {
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
          <p className="take-action-text">No card matches search.</p>
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
            </div>
          </>
        )
      ) : null}
    </>
  );
}

export default CardsDisplay;
