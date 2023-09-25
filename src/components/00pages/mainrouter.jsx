import Home from "./01home/Home";
import About from "./02about/About";
import Cards from "./03cards/Cards";
import AboutPokemonTcg from "./04aboutPokemonTCG/AboutPokemonTcg";

const mainroutes = [
  {
    name: "HOME",
    path: "/",
    element: <Home />,
  },
  {
    name: "ABOUT",
    path: "/about",
    element: <About />,
  },
  {
    name: "CARDS",
    path: "/cards/*",
    element: <Cards />,
  },
  {
    name: "TCG",
    path: "/tcg",
    element: <AboutPokemonTcg />,
  },
];

export default mainroutes;
