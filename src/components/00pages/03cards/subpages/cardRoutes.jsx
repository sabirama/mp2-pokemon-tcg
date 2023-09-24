import CardAll from "./card-all/CardAll";
import CardSearch from "./card-search/CardSearch";
import CardSet from "./card-set/CardSet";

const cardRoutes = [
  {
    name: "CARD SEARCH",
    path: "card-search",
    element: <CardSearch />,
  },
  {
    name: "CARD SETS",
    path: "card-sets",
    element: <CardSet />,
  },
  {
    name: "CARDS",
    path: "card-all",
    element: <CardAll />,
  },
];

export default cardRoutes;
