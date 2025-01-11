import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loader from '../../../assets/images/loader.gif';

function Home() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
    return () => {};
  }, []);

  return load ? (
    <main>
      <img src={loader} className="loader" />
    </main>
  ) : (
    <main>
      <div className="home-container">
        <h1>Welcome to PokeTCG Pulse!</h1>
        <p>Unleash your inner trainer and become a Pokémon TCG master, come and explore the world of Pokemon TCG!</p>
        <p>View thousands of Pokemon TCG cards!</p>

        <div className="home-container">
          <Link to="/tcg" className="cta-btn">
            Card Library
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
