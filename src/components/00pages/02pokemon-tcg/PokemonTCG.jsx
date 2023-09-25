import mapping from "../../methods/mapping";
import routing from "../../methods/routing";
import tcgRoutes from "./subpages/tcgRoutes";
import "./PokemonTCG.css";

const PokemonTCG = () => {
  return (
    <main className="tcg-main">
      {mapping(tcgRoutes, "TCG About")}

      {routing(tcgRoutes)}
    </main>
  );
};

export default PokemonTCG;
