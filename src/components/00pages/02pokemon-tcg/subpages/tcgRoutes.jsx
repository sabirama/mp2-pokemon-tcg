import AboutPokemonTCG from "./about-pokemon-tcg/AboutPokemonTCG";
import HowToPlay from "./how-to-play/HowToPlay";
import TCGAboutIndex from "./tcg-about-index/TCGAboutIndex";

const tcgRoutes = [
  {
    name: "TCG About",
    path: "*",
    element: <TCGAboutIndex />,
  },
  {
    name: "Pokemon TCG",
    path: "tcg",
    element: <AboutPokemonTCG />,
  },
  {
    name: "How to play",
    path: "play",
    element: <HowToPlay />,
  },
];

export default tcgRoutes;
