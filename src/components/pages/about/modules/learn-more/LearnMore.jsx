import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LearnMore() {
  return (
    <main id="about">
      <Container>
        <h1>Learn about the Pokémon Trading Card Game.</h1>

        <nav className="alt-nav">
        <Link to="/about/our-site">About Us</Link>
          <Link to="/about/guide">Game Guide</Link>
        </nav>
      </Container>
    </main>
  );
}

export default LearnMore;
