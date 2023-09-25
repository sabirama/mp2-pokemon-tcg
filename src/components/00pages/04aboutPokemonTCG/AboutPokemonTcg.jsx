import "./AboutPokemonTcg.css";

const AboutPokemonTcg = () => {
  return (
    <main className="about-tcg-main">
      <article>
        <div className="main-text-container">
          <h1>
            Beginner`s Guide to Playing the Pokémon Trading Card Game (TCG)
          </h1>
          <p> Introduction:</p>
          <p>
            The Pokémon Trading Card Game (TCG) is a popular collectible card
            game that allows players to build decks, battle against opponents,
            and showcase their strategic skills. Whether you`re a fan of the
            Pokémon franchise or new to the TCG world, this tutorial will
            provide you with a thorough introduction to playing the game.
          </p>
        </div>

        <ol className="main-ol">
          <p>Table of Contents:</p>
          <li className="main-li">
            Understanding the Basics
            <ol className="sub-ol">
              <li>Card Types</li>
              <li>Card Anatomy</li>
              <li>Deck Composition</li>
              <li>Winning Conditions</li>
            </ol>
          </li>

          <li className="main-li">
            Game Setup
            <ol className="sub-ol">
              <li>Preparing Your Deck</li>
              <li>Determining the Starting Player</li>
              <li>Setting Up the Game Board</li>
            </ol>
          </li>

          <li className="main-li">
            Advanced Strategies
            <ol className="sub-ol">
              <li>Deck Building</li>
              <li>Card Interactions</li>
              <li>Combos and Synergy</li>
              <li>Meta Game</li>
            </ol>
          </li>

          <li className="main-li">
            Trading and Collecting
            <ol className="sub-ol">
              <li>Collecting Rare Cards</li>
              <li>Trading with Other Players</li>
              <li>Expanding Your Collection</li>
            </ol>
          </li>

          <li>
            Tournaments and Events
            <ol className="sub-ol">
              <li>Local Tournaments</li>
              <li>Regional and National Championships</li>
              <li>World Championships</li>
            </ol>
          </li>

          <li className="main-li">
            Online Play
            <ol className="sub-ol">
              <li>Pokémon TCG Online</li>
              <li>Playing with Friends Online</li>
            </ol>
          </li>
        </ol>
      </article>
    </main>
  );
};

export default AboutPokemonTcg;
