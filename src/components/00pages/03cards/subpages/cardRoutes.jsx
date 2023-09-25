import CardAll from "./card-all/CardAll";
import CardSearch from "./card-search/CardSearch";
import CardSet from "./card-set/CardSet";

const cardRoutes = [
  {
    name: "CARD SEARCH",
    path: "*",
    element: <CardSearch />,
  },
  {
    name: "CARD SETS",
    path: "sets",
    element: <CardSet />,
  },
  {
    name: "CARDS",
    path: "all",
    element: <CardAll />,
  },
];

export default cardRoutes;
