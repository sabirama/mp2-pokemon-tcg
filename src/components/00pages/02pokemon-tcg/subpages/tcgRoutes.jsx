import AboutPokemonTCG from "./about-pokemon-tcg/AboutPokemonTCG";
import About from "./about/About";
import HowToPlay from "./how-to-play/HowToPlay";

const tcgRoutes = [
  {
    name: "Pokemon TCG",
    path: "*",
    element: <AboutPokemonTCG />,
  },
  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "How to play",
    path: "play",
    element: <HowToPlay />,
  },
];

export default tcgRoutes;
