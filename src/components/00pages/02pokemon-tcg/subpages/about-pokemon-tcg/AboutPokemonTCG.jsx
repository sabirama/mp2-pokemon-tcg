import mapping from '../../../../methods/mapping'
import tcgRoutes from '../tcgRoutes'
import cherim from '../../../../../assets/images/cherim.png'
import './AboutPokemonTCG.css'
import { Container } from 'react-bootstrap'

const AboutPokemonTCG = () => {
    return (
        <main className="tcg-about-main">
            <Container className="m-auto">
                <img
                    src={cherim}
                    alt=""
                    className="tcg-about-img"
                    width="50%"
                />
            </Container>
            <Container className="m-auto">
                <h1>
                    Welcome, want to know about the Pokémon Trading Card Game
                    website?
                </h1>

                {mapping(tcgRoutes, 'PokeTCG Pulse')}
            </Container>
        </main>
    )
}

export default AboutPokemonTCG
