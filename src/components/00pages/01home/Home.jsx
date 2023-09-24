import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="main-home">
      <div className="text-container">
        <h1>Welcome to Pokemon TCG!</h1>
        <p>
          Unleash your inner trainer and become a Pokémon TCG master, come and
          explore the world of Pokemon TCG!
        </p>
      </div>

      <div className="home-button-container">
        <Link to="cards" className="start-button">
          Get Started
        </Link>
      </div>
    </main>
  );
};

export default Home;
