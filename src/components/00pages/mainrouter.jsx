import Home from "./01home/Home";
import PokemonTCG from "./02pokemon-tcg/PokemonTCG";
import Cards from "./03cards/Cards";

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
    element: <Cards />,
  },
];

export default mainroutes;
