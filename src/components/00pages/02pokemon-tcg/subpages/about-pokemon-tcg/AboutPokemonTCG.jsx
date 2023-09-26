import mapping from "../../../../methods/mapping";
import tcgRoutes from "../tcgRoutes";
import cherim from "../../../../../assets/images/cherim.png";
import "./AboutPokemonTCG.css";

const AboutPokemonTCG = () => {
  return (
    <main className="tcg-about-main">
      <div>
        <h1>
          Welcome, want to know about the Pokémon Trading Card Game website?
        </h1>

        {mapping(tcgRoutes, "Pokemon TCG")}
      </div>
      <img src={cherim} alt="" className="tcg-about-img" />
    </main>
  );
};

export default AboutPokemonTCG;
