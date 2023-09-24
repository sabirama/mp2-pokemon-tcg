import { Routes, Route } from "react-router-dom";
import cardRoutes from "./subpages/cardRoutes";
import mapping from "../../methods/mapping";

import "./Cards.css";

const Cards = () => {
  return (
    <main className="cards-main">
      <div className="card-nav">{mapping(cardRoutes)}</div>;
      <Routes>
        {cardRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </main>
  );
};

export default Cards;
