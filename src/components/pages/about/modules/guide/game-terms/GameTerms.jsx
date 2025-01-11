import { Container, Accordion } from 'react-bootstrap';

const GameTerms = () => {
  return (
    <Container className="py-5">
      <h3 className="text-center p-3">Pokémon TCG Glossary</h3>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ability</Accordion.Header>
          <Accordion.Body>
            An Ability is an effect on a Pokémon that is not an attack. Some will be active all of the time, while some
            you will need to choose to use. Read each Ability to make sure you understand exactly how and when it works.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>ACE SPEC Trainer Card</Accordion.Header>
          <Accordion.Body>
            A powerful Trainer card. You may only have one ACE SPEC Trainer card in your deck.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Active Pokémon</Accordion.Header>
          <Accordion.Body>
            Your in-play Pokémon that is not on the Bench. Only the Active Pokémon can attack.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Ancient Trait</Accordion.Header>
          <Accordion.Body>
            Ancient Traits are special powers (like Ω Barrier or α Recovery) that appear on certain Pokémon cards, right
            under the Pokémon’s name. They are not attacks or Abilities, so cards that prevent those from being used
            won’t affect Ancient Traits.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Attach</Accordion.Header>
          <Accordion.Body>
            When you take a card from your hand and put it on one of your Pokémon in play.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Attack</Accordion.Header>
          <Accordion.Body>
            1) When your Active Pokémon fights your opponent’s Pokémon. 2) The text written on each Pokémon card that
            shows what it does when it attacks (a Pokémon can have several attacks on it).
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Attacking Pokémon</Accordion.Header>
          <Accordion.Body>The Active Pokémon, as it performs an attack.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>Basic Energy Card</Accordion.Header>
          <Accordion.Body>
            A Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, or Fairy Energy card.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>Basic Pokémon Card</Accordion.Header>
          <Accordion.Body>A card you can play directly from your hand on your turn. See Evolution card.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header>Bench</Accordion.Header>
          <Accordion.Body>
            The place for your Pokémon that are in play but are not actively fighting. They come out and fight if the
            Active Pokémon retreats or is Knocked Out. When Benched Pokémon take damage, do not apply Weakness or
            Resistance.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
          <Accordion.Header>Between-Turns Step</Accordion.Header>
          <Accordion.Body>
            The part of each turn when the game shifts from one player to the other. Check Poisoned, Burned, Asleep, and
            Paralyzed at this step, and see whether any Pokémon are Knocked Out.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
          <Accordion.Header>BREAK Evolution</Accordion.Header>
          <Accordion.Body>
            A special kind of Evolution. When a Pokémon evolves into a Pokémon BREAK, it keeps the attacks, Abilities,
            Weakness, Resistance, and Retreat Cost of its previous Evolution.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12">
          <Accordion.Header>Burn Marker</Accordion.Header>
          <Accordion.Body>
            What you put on a Pokémon to remind you it is Burned. Remove the marker if the Pokémon is Benched or
            evolved.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="13">
          <Accordion.Header>Damage</Accordion.Header>
          <Accordion.Body>
            What usually happens when one Pokémon attacks another. If a Pokémon has total damage greater than or equal
            to its Hit Points, it is Knocked Out.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="14">
          <Accordion.Header>Damage Counter</Accordion.Header>
          <Accordion.Body>
            A counter put on your Pokémon to show it has taken 10 damage. It stays on your Pokémon even if the Pokémon
            is Benched or evolved. Although 50- and 100-damage counters are sometimes used for convenience, if a card
            refers to a “damage counter,” it means the standard 10-damage counter.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="15">
          <Accordion.Header>Defending Pokémon</Accordion.Header>
          <Accordion.Body>The Pokémon that receives an attack.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="16">
          <Accordion.Header>Devolve</Accordion.Header>
          <Accordion.Body>
            Certain cards can devolve an evolved Pokémon, which is the opposite of evolving your Pokémon. When a Pokémon
            is devolved, it also loses Special Conditions and any other effects.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="17">
          <Accordion.Header>Discard Pile</Accordion.Header>
          <Accordion.Body>
            The cards you have discarded. These cards are always face up. Anyone can look at these cards at any time.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="18">
          <Accordion.Header>Dual-Type Pokémon</Accordion.Header>
          <Accordion.Body>A Pokémon that has two types at the same time.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="19">
          <Accordion.Header>Energy Card</Accordion.Header>
          <Accordion.Body>Cards that power your Pokémon so they can attack. See basic Energy card.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="20">
          <Accordion.Header>Evolution Card</Accordion.Header>
          <Accordion.Body>
            A card you play on top of a Basic Pokémon card (or on top of another Evolution card) to make it stronger.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="21">
          <Accordion.Header>Evolved Pokémon</Accordion.Header>
          <Accordion.Body>A Pokémon in play that has another Pokémon under it.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="22">
          <Accordion.Header>Fossil Trainer Cards</Accordion.Header>
          <Accordion.Body>
            A special kind of Trainer card that acts like a Basic Pokémon when put into play. When a Fossil Trainer card
            is in your hand, deck, or discard pile, it is not considered a Basic Pokémon.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="23">
          <Accordion.Header>GX Attack</Accordion.Header>
          <Accordion.Body>
            A powerful kind of attack. Only Pokémon-GX have GX attacks. A player can’t use more than one GX attack in a
            game.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="24">
          <Accordion.Header>GX Marker</Accordion.Header>
          <Accordion.Body>
            A reminder tool sometimes included with the damage counter sheet. When you use your GX attack for the game,
            turn your GX marker face down.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="25">
          <Accordion.Header>Hit Points (HP)</Accordion.Header>
          <Accordion.Body>
            A number every Pokémon has, telling you how much damage it can take before it is Knocked Out.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="26">
          <Accordion.Header>In Play</Accordion.Header>
          <Accordion.Body>
            Your cards are in play when they are on the table. Basic Pokémon cards, Evolution cards, and Energy cards
            cannot be used unless they are in play. (Your deck, your discard pile, and your Prize cards are not in play,
            but your Benched Pokémon are.)
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="27">
          <Accordion.Header>Item Card</Accordion.Header>
          <Accordion.Body>
            A type of Trainer card. Follow the instructions on the card and then discard it.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="28">
          <Accordion.Header>Knocked Out</Accordion.Header>
          <Accordion.Body>
            A Pokémon is Knocked Out if it has damage greater than or equal to its Hit Points. That Pokémon goes to the
            discard pile along with all cards attached to it. When one of your opponent’s Pokémon is Knocked Out, take
            one of your Prize cards.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="29">
          <Accordion.Header>Lost Zone</Accordion.Header>
          <Accordion.Body>
            Cards sent to the Lost Zone are no longer playable during that game. Put them face up anywhere out of play.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="30">
          <Accordion.Header>Mega Evolution Pokémon</Accordion.Header>
          <Accordion.Body>
            A very powerful kind of Pokémon-EX with an additional drawback: when one of your Pokémon becomes a Mega
            Evolution Pokémon, your turn ends.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="31">
          <Accordion.Header>Owner</Accordion.Header>
          <Accordion.Body>
            A Pokémon with a Trainer’s name in its title, such as Brock’s Sandshrew or Team Rocket’s Meowth. Cards with
            , , , , or do NOT count as “Owner” cards.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="32">
          <Accordion.Header>Poison Marker</Accordion.Header>
          <Accordion.Body>
            Object put on a Pokémon to remind you it is Poisoned. Remove the marker if the Pokémon is Benched or
            evolved.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="33">
          <Accordion.Header>Poké-Body</Accordion.Header>
          <Accordion.Body>
            An effect that is active as soon as that Pokémon is in play and lasts until the Pokémon leaves play.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="34">
          <Accordion.Header>Poké-Power</Accordion.Header>
          <Accordion.Body>
            A once-per-turn power on Active and Benched Pokémon you must choose to use. Most Poké-Powers are turned off
            if the Pokémon has a Special Condition.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="35">
          <Accordion.Header>Pokémon</Accordion.Header>
          <Accordion.Body>
            The colorful characters that fight for you in the Pokémon Trading Card Game. They are represented in the
            game by Basic Pokémon and Evolution cards.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="36">
          <Accordion.Header>Pokémon-EX</Accordion.Header>
          <Accordion.Body>
            Pokémon-EX are a stronger form of Pokémon with a special drawback: when your Pokémon-EX is Knocked Out, your
            opponent takes two Prize cards instead of one.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="37">
          <Accordion.Header>Pokémon-GX</Accordion.Header>
          <Accordion.Body>
            Pokémon-GX are a stronger form of Pokémon with a special drawback: when your Pokémon-GX is Knocked Out, your
            opponent takes two Prize cards instead of one. Each Pokémon-GX has a powerful GX attack.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="38">
          <Accordion.Header>Pokémon LEGEND</Accordion.Header>
          <Accordion.Body>
            Special double cards that showcase powerful Legendary Pokémon. Both cards must be played together at the
            same time.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="39">
          <Accordion.Header>Pokémon LV.X</Accordion.Header>
          <Accordion.Body>
            Stronger versions of a regular Pokémon, put on top of the regular Pokémon of the same name and adding extra
            abilities to the original Pokémon.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="40">
          <Accordion.Header>Pokémon Power</Accordion.Header>
          <Accordion.Body>
            A special ability some Pokémon have. Pokémon Powers are divided into two categories: Poké-Power and
            Poké-Body. They always include the words “Poké-Power” or “Poké-Body” so you can tell they are not attacks.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="41">
          <Accordion.Header>Pokémon SP</Accordion.Header>
          <Accordion.Body>
            A special kind of Pokémon card. When you play a Pokémon SP from your hand, you don’t have to evolve it from
            anything—you can just put it into play.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="42">
          <Accordion.Header>Pokédex</Accordion.Header>
          <Accordion.Body>
            A handy book that helps you learn about all of the different kinds of Pokémon.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="43">
          <Accordion.Header>Pokémon Tool</Accordion.Header>
          <Accordion.Body>
            A special kind of Trainer card that works like an Item card. Attach a Pokémon Tool to one of your Pokémon in
            play. If that Pokémon leaves play, the Pokémon Tool is discarded.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="44">
          <Accordion.Header>Poké-Power</Accordion.Header>
          <Accordion.Body>
            A once-per-turn power on Active and Benched Pokémon you must choose to use. Most Poké-Powers are turned off
            if the Pokémon has a Special Condition.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="45">
          <Accordion.Header>Poké-Body</Accordion.Header>
          <Accordion.Body>
            An effect that is active as soon as that Pokémon is in play and lasts until the Pokémon leaves play.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="46">
          <Accordion.Header>Pokémon-ex</Accordion.Header>
          <Accordion.Body>
            Pokémon-ex are a stronger form of Pokémon with a special drawback: when your Pokémon-ex is Knocked Out, your
            opponent takes two Prize cards instead of one.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="47">
          <Accordion.Header>Pokémon-GX</Accordion.Header>
          <Accordion.Body>
            Pokémon-GX are a stronger form of Pokémon with a special drawback: when your Pokémon-GX is Knocked Out, your
            opponent takes two Prize cards instead of one. Each Pokémon-GX has a powerful GX attack.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="48">
          <Accordion.Header>Power Up</Accordion.Header>
          <Accordion.Body>
            When you evolve one of your Pokémon by putting a Stage 1 Evolution card on top of a Basic Pokémon card. You
            can only Power Up once each turn.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="49">
          <Accordion.Header>Prize Card</Accordion.Header>
          <Accordion.Body>
            One of the six face-down cards near the top of your deck that you set up at the beginning of the game. When
            your opponent’s Pokémon are Knocked Out, you take a Prize card. Take all six to win.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="50">
          <Accordion.Header>Rare Pokémon</Accordion.Header>
          <Accordion.Body>
            Certain cards are considered to be Rare Pokémon. You may have only one Rare Pokémon card in your deck.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="51">
          <Accordion.Header>Retreating Pokémon</Accordion.Header>
          <Accordion.Body>
            When your Active Pokémon goes to the Bench and you choose a different Active Pokémon.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="52">
          <Accordion.Header>Rulebook</Accordion.Header>
          <Accordion.Body>This book. It tells you how to play the Pokémon TCG.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="53">
          <Accordion.Header>Shuffling</Accordion.Header>
          <Accordion.Body>Mixing your deck so the order of the cards is not known.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="54">
          <Accordion.Header>Special Condition</Accordion.Header>
          <Accordion.Body>
            A harmful condition that makes a Pokémon harder to battle. The four Special Conditions are Poisoned, Burned,
            Asleep, and Paralyzed.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="55">
          <Accordion.Header>Special Energy Card</Accordion.Header>
          <Accordion.Body>
            A kind of Energy card. They are each a different type, like Grass, Fire, Water, and so on. Special Energy
            cards are not Basic Energy cards.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="56">
          <Accordion.Header>Stage 1 Evolution Card</Accordion.Header>
          <Accordion.Body>
            A card that makes one of your Basic Pokémon stronger. It goes on top of the Basic Pokémon card.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="57">
          <Accordion.Header>Stage 2 Evolution Card</Accordion.Header>
          <Accordion.Body>
            A card that makes one of your Basic Pokémon stronger. It goes on top of the Stage 1 Evolution card.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="58">
          <Accordion.Header>Supporter Card</Accordion.Header>
          <Accordion.Body>
            A type of Trainer card. You may play as many Supporter cards as you like during your turn. You may play only
            one Supporter card each turn.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="59">
          <Accordion.Header>Switch</Accordion.Header>
          <Accordion.Body>The act of making one of your Benched Pokémon the new Active Pokémon.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="60">
          <Accordion.Header>Trainer Card</Accordion.Header>
          <Accordion.Body>
            Special cards used in the game to help you play. Attach them to your Pokémon, play them to help you draw
            cards or do something else that makes you happy, or just put them in the discard pile when you don’t need
            them anymore.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="61">
          <Accordion.Header>Trainer Kit</Accordion.Header>
          <Accordion.Body>
            A box that includes two 30-card decks for two players, plus a playmat and a rulebook.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="62">
          <Accordion.Header>Type</Accordion.Header>
          <Accordion.Body>
            Each Pokémon is one or two of these types: Colorless, Darkness, Dragon, Fairy, Fighting, Fire, Grass,
            Lightning, Metal, Psychic, Water. Some attacks do more damage to certain types of Pokémon. (For example,
            Water-type Pokémon take extra damage from Lightning-type attacks.) Some Pokémon are more resistant to
            certain types of attacks. (For example, Fighting-type Pokémon take less damage from Psychic-type attacks.)
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="63">
          <Accordion.Header>Weakness</Accordion.Header>
          <Accordion.Body>
            Some Pokémon types are more vulnerable to others. For example, Water-type Pokémon take extra damage from
            Lightning-type attacks. Weakness is a number that tells you how much extra damage a Pokémon takes when it’s
            attacked by a type it is weak to.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="64">
          <Accordion.Header>Your Turn</Accordion.Header>
          <Accordion.Body>
            The time when you get to do stuff during your turn, like playing Trainer cards, using Pokémon Powers,
            evolving Pokémon, attaching Energy cards, retreating your Active Pokémon, and attacking.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="65">
          <Accordion.Header>Your Opponent’s Turn</Accordion.Header>
          <Accordion.Body>The time when your opponent gets to do stuff during their turn.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default GameTerms;
