import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import request from "../../../../../lib/request";

const CardSet = () => {
  const [sets, setSets] = useState([]);

  async function getSets() {
    try {
      const { data } = await request.get("/sets");
      setSets(data.data);
      console.log(sets);
    } catch (error) {
      null;
    }
  }

  useEffect(() => {
    getSets();
  }, []);

  return (
    <main className="sets-main">
      <div className="sets-display">
        {sets.map((set, index) => {
          return (
            <Link key={index} to={set.id} className="set-link">
              <div className="set-image-container">
                <div>
                  <img src={set.images.symbol} alt="" className="set-symbol" />
                  <img src={set.images.logo} alt="" className="set-logo" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <Routes>
        {sets.map((set, index) => {
          <Route key={index} path={set.id} element={set.name} />;
        })}
      </Routes>
    </main>
  );
};

export default CardSet;
