import { useState, useEffect } from "react";
import request from "../../../../../lib/request";
import "./CardSet.css";
import SetsPage from "./sets-page/SetsPage";

const CardSet = () => {
  const [sets, setSets] = useState([]);
  const [id, setId] = useState("");

  async function getSets() {
    try {
      const { data } = await request.get("/sets");
      setSets(data.data);
    } catch (error) {
      null;
    }
  }

  const clickhandler = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  useEffect(() => {
    getSets();
  }, []);

  return (
    <main className="sets-main">
      <div className="sets-display">
        {sets.map((set, index) => {
          return (
            <div key={index} className="set-link">
              <div className="set-image-container">
                <div>
                  <img src={set.images.symbol} alt="" className="set-symbol" />
                  <img src={set.images.logo} alt="" className="set-logo" />
                  <input
                    type="text"
                    id={set.id}
                    defaultValue={set.id}
                    onClick={clickhandler}
                    className="set-id"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <SetsPage setid={id} />
    </main>
  );
};

export default CardSet;
