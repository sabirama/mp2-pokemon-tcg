import { Container, Accordion } from "react-bootstrap";

function HowToPlay() {
  return (
    <Container className="py-5">
      <h3 className="text-center p-3">
        Beginner`s Guide to Playing the Pokémon Trading Card Game (TCG)
      </h3>

      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Understanding the Basics</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <h3>Card Types:</h3>
                  <ul>
                    <li>
                      Pokémon Cards: Represent the creatures you use in battle.
                    </li>
                    <li>
                      Trainer Cards: Provide various effects and support
                      actions.
                    </li>
                    <li>Energy Cards: Power your Pokémon`s attacks.</li>
                  </ul>
                </li>
                <li>
                  <h3>Card Anatomy:</h3>
                  <ul>
                    <li>Name and Illustration</li>
                    <li>HP (Hit Points)</li>
                    <li>Attacks and Abilities</li>
                    <li>Retreat Cost</li>
                    <li>Evolutionary Stage</li>
                  </ul>
                </li>
                <li>
                  <h3>Deck Composition:</h3>
                  <ul>
                    <li>A standard deck consists of 60 cards.</li>
                    <li>
                      You can have up to 4 of the same card (except for basic
                      Energy cards).
                    </li>
                    <li>
                      A deck must have exactly 1 Basic Pokémon card as the
                      Active Pokémon.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>Winning Conditions:</h3>
                  <ul>
                    <li>Knock out all your opponent1s Pokémon.</li>
                    <li>Collect all Prize Cards (usually 6).</li>
                  </ul>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Game Setup</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <h2>Preparing Your Deck:</h2>
                  <p>Shuffle your deck.</p>
                  <p>Draw 7 cards.</p>
                  <p>
                    If you don`t have any Basic Pokémon, reshuffle and draw 7
                    again.
                  </p>
                </li>
                <li>
                  <h2>Determining the Starting Player:</h2>
                  <p>Flip a coin or use a random method.</p>
                  <p>
                    The starting player doesn`t draw a card on their first turn.
                  </p>
                </li>
                <li>
                  <h2>Setting Up the Game Board:</h2>
                  <p>Place Basic Pokémon on the Bench (up to 5).</p>
                  <p>Determine Prize Cards (6 cards face down).</p>
                  <p>Shuffle and place your deck on your side.</p>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Gameplay</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <h2>Draw Phase:</h2>
                  <p>Draw one card at the beginning of your turn.</p>
                </li>
                <li>
                  <h2>Pokémon Basics:</h2>
                  <p>Play Basic Pokémon from your hand.</p>
                  <p>Evolve them from their previous stage.</p>
                </li>
                <li>
                  <h2>Attacking:</h2>
                  <p>Choose an attack from your Active Pokémon`s moves.</p>
                  <p>Pay the required Energy.</p>
                  <p>Apply damage to your opponent`s Pokémon.</p>
                </li>
                <li>
                  <h2>Using Trainer Cards:</h2>
                  <p>Play Trainer cards from your hand.</p>
                  <p>
                    Follow card instructions (e.g., draw cards, heal, search for
                    Pokémon).
                  </p>
                </li>
                <li>
                  <h2>Special Conditions:</h2>
                  <p>
                    Pokémon can be affected by Paralyzed, Poisoned, Burned,
                    Asleep, or Confused status conditions.
                  </p>
                </li>
                <li>
                  <h2>Retreating Pokémon:</h2>
                  <p>Pay the Retreat Cost in Energy cards.</p>
                  <p>Bring a Benched Pokémon to the Active position.</p>
                </li>
                <li>
                  <h2>Evolving Pokémon:</h2>
                  <p>
                    Place the evolution card on top of the corresponding
                    Pokémon.
                  </p>
                  <p>Follow any evolution-related rules.</p>
                </li>
                <li>
                  <h2>Energy Cards:</h2>
                  <p>Attach one Energy per turn to a Pokémon.</p>
                  <p>Energy types must match the Pokémon`s requirements.</p>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Winning the Game</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <h2>Knocking Out Pokémon:</h2>
                  <p>Deal damage equal to or exceeding the opponent`s HP.</p>
                  <p>Your opponent takes a Prize Card.</p>
                </li>
                <li>
                  <h2>Prize Cards:</h2>
                  <p>Collect 6 Prize Cards to win.</p>
                  <p>
                    Prizes are taken after knocking out your opponent`s Pokémon.
                  </p>
                </li>
                <li>
                  <h2>Decking Out:</h2>
                  <p>
                    If a player can`t draw a card at the beginning of their
                    turn, they lose.
                  </p>
                </li>
                <li>
                  <h2>Surrender:</h2>
                  <p>A player can concede a match at any time.</p>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Advanced Strategies</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <h2>Deck Building:</h2>
                  <p>Create decks with synergy and strategy.</p>
                  <p>Consider the metagame and card interactions.</p>
                </li>
                <li>
                  <h2>Card Interactions:</h2>
                  <p>Understand how card effects interact with each other.</p>
                </li>
                <li>
                  <h2>Combos and Synergy:</h2>
                  <p>Use card combinations for powerful plays.</p>
                </li>
                <li>
                  <h2>Meta Game:</h2>
                  <p>Keep up with the current strong decks and strategies.</p>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Trading and Collecting</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <h2>Collecting Rare Cards:</h2>
                  <p>Collect rare and valuable cards for your collection.</p>
                </li>
                <li>
                  <h2>Trading with Other Players:</h2>
                  <p>Trade cards with friends or at events.</p>
                </li>
                <li>
                  <h2>Expanding Your Collection:</h2>
                  <p>
                    Buy booster packs, theme decks, or singles to expand your
                    collection.
                  </p>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Tournaments and Events</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <h2>Local Tournaments:</h2>
                  <p>
                    Participate in friendly competitions at your local game
                    store.
                  </p>
                </li>
                <li>
                  <h2>Regional and National Championships:</h2>
                  <p>Compete at larger events for prizes and glory.</p>
                </li>
                <li>
                  <h2>World Championships:</h2>
                  <p>
                    Reach the pinnacle of competition at the Pokémon TCG World
                    Championships.
                  </p>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Online Play</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <h2>Pokémon TCG Online:</h2>
                  <p>Play the Pokémon TCG digitally against other players.</p>
                </li>
                <li>
                  <h2>Playing with Friends Online:</h2>
                  <p>Challenge friends to matches over the internet.</p>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
}

export default HowToPlay;
