import "./About.css";

const About = () => {
  return (
    <main className="about-main">
      <div className="about-main-text-container">
        <h2>Our Mission</h2>
        <p>
          At Pokémon TCG, our mission is to provide fans of all ages with a
          comprehensive resource for everything related to the Pokémon Trading
          Card Game. Whether you`re a seasoned player, a collector, or a
          beginner looking to learn, we`ve got you covered.
        </p>

        <h2>What We Offer</h2>
        <p>On our website, you`ll find:</p>
        <ul>
          <li>Detailed card database with card images and descriptions</li>
          <li>Strategy guides and tips for players of all levels</li>
          <li>News and updates about the Pokémon TCG</li>
          <li>Collector`s corner for rare and valuable cards</li>
          <li>Community forums to connect with fellow enthusiasts</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions, suggestions, or feedback, please don`t
          hesitate to contact us. We value your input and are dedicated to
          making this site the best resource for Pokémon TCG fans worldwide.
        </p>
        <p>Email: info@pokemontcgwebsite.com</p>

        <h2>Follow Us</h2>
        <p>
          Stay up-to-date with the latest Pokémon TCG news and updates by
          following us on social media:
        </p>
        <ul>
          <li className="about-tcg-link-list">
            Facebook:
            <a
              href="https://www.facebook.com/pokemontcgwebsite"
              className="about-tcg-link"
            >
              facebook.com/pokemontcgwebsite
            </a>
          </li>
          <li className="about-tcg-link-list">
            Twitter:
            <a
              href="https://twitter.com/pokemontcgweb"
              className="about-tcg-link"
            >
              twitter.com/pokemontcgweb
            </a>
          </li>
          <li className="about-tcg-link-list">
            Instagram:
            <a
              href="https://www.instagram.com/pokemontcgwebsite"
              className="about-tcg-link"
            >
              instagram.com/pokemontcgwebsite
            </a>
          </li>
        </ul>

        <p>
          Thank you for visiting Pokémon TCG! We hope you enjoy exploring the
          world of Pokémon cards with us.
        </p>
      </div>
    </main>
  );
};

export default About;
