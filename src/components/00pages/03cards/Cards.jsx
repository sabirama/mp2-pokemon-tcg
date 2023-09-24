import { Routes, Route } from "react-router-dom";
import cardRoutes from "./subpages/cardRoutes";
import CardNav from "./CardNav";

const Cards = () => {
  return (
    <main className="cards-main">
      <CardNav />
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
