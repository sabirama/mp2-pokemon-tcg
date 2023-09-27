import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <main className="main-home">
            <div className="text-container">
                <h1>Welcome to PokeTCG Pulse!</h1>
                <p>
                    Unleash your inner trainer and become a Pokémon TCG master,
                    come and explore the world of Pokemon TCG!
                </p>
                <p>View thousands of Pokemon TCG cards!</p>

                <div className="home-button-container">
                    <Link to="cards" className="start-button">
                        Search Cards
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home
