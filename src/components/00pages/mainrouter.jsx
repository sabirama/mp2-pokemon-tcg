import Home from "./01home/Home";
import PokemonTCG from "./02pokemon-tcg/PokemonTCG";
import Cards from "./03cards/Cards";
import cardIcon from "../../assets/images/pokemon-card.png";

const mainroutes = [
  {
    name: "HOME",
    path: "/",
    element: <Home />,
  },
  {
    name: "PokemonTCG",
    path: "pokemon-tcg/*",
    element: <PokemonTCG />,
  },
  {
    name: "CARDS",
    path: "cards/*",
    icon: cardIcon,
    element: <Cards />,
  },
];

export default mainroutes;
