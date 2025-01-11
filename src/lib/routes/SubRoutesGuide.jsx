import HowToPlay from "./../../components/pages/about/modules/guide/how-to-play/HowToPlay";
import GameTerms from "./../../components/pages/about/modules/guide/game-terms/GameTerms";

//under  about/guide path
const SubRoutesGuide = [
  {
    name: "how-to-play",
    path: "*",
    element: HowToPlay,
  },
  {
    name: "game-terms",
    path: "game-terms",
    element: GameTerms,
  },
];

export default SubRoutesGuide;
