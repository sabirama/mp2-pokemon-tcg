import './HowToPlay.css'
import HowToPlayRoutes from './howToPlayRoutes'
import routing from '../../../../methods/routing'
import mapping from '../../../../methods/mapping'

const HowToPlay = () => {
    return (
        <main className="about-tcg-main">
            {mapping(HowToPlayRoutes)}

            {routing(HowToPlayRoutes)}
        </main>
    )
}

export default HowToPlay
