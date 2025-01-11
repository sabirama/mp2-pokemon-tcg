import { Accordion, Container } from 'react-bootstrap';

function OurSite() {
  return (
    <Container>
      <h3 className="text-center p-3">About Us</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Our Mission</Accordion.Header>
          <Accordion.Body>
            <p>
              At Pokémon TCG, our mission is to provide fans of all ages with a comprehensive resource for everything
              related to the Pokémon Trading Card Game. Whether you`re a seasoned player, a collector, or a beginner
              looking to learn, we`ve got you covered.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>What We Offer</Accordion.Header>
          <Accordion.Body>
            <p>On our website, you`ll find:</p>
            <ul>
              <li>Detailed card database with card images and descriptions</li>
              <li>Strategy guides and tips for players of all levels</li>
              <li>News and updates about the Pokémon TCG</li>
              <li>Collector`s corner for rare and valuable cards</li>
              <li>Community forums to connect with fellow enthusiasts</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Contact Us</Accordion.Header>
          <Accordion.Body>
            <p>
              If you have any questions, suggestions, or feedback, please don`t hesitate to contact us. We value your
              input and are dedicated to making this site the best resource for Pokémon TCG fans worldwide.
            </p>
            <p>Email: info@pokemontcgwebsite.com</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Follow Us</Accordion.Header>
          <Accordion.Body>
            <p>Stay up-to-date with the latest Pokémon TCG news and updates by following us on social media:</p>
            <ul>
              <li className="tcg-link-list">
                Facebook:
                <a href="https://www.facebook.com/pokemontcgwebsite" className="tcg-link">
                  facebook.com/pokemontcgwebsite
                </a>
              </li>
              <li className="tcg-link-list">
                Twitter:
                <a href="https://twitter.com/pokemontcgweb" className="-tcg-link">
                  twitter.com/pokemontcgweb
                </a>
              </li>
              <li className="tcg-link-list">
                Instagram:
                <a href="https://www.instagram.com/pokemontcgwebsite" className="tcg-link">
                  instagram.com/pokemontcgwebsite
                </a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <p className="text-center p-3">
          Thank you for visiting Pokémon TCG! We hope you enjoy exploring the world of Pokémon cards with us.
        </p>
      </Accordion>
    </Container>
  );
}

export default OurSite;
