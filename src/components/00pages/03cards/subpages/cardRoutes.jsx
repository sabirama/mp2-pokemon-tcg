import CardAll from "./card-all/CardAll";
import CardSearch from "./card-search/CardSearch";
import CardSet from "./card-set/CardSet";
import jigglypuff from "../../../../assets/images/jigglypuff.png";
import pahirisu from "../../../../assets/images/pachirisu.png";
import togepi from "../../../../assets/images/togepi.png";

const cardRoutes = [
  {
    name: "CARD SEARCH",
    path: "*",
    icon: jigglypuff,
    element: <CardSearch />,
  },
  {
    name: "CARD SETS",
    path: "sets",
    icon: pahirisu,
    element: <CardSet />,
  },
  {
    name: "ALL",
    path: "all",
    icon: togepi,
    element: <CardAll />,
  },
];

export default cardRoutes;
