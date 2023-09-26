import routing from "../../methods/routing";
import tcgRoutes from "./subpages/tcgRoutes";
import "./PokemonTCG.css";

const PokemonTCG = () => {
  return <main className="tcg-main">{routing(tcgRoutes)}</main>;
};

export default PokemonTCG;
