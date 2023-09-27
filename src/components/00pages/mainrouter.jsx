import Home from './01home/Home'
import PokemonTCG from './02pokemon-tcg/PokemonTCG'
import Cards from './03cards/Cards'
import cardIcon from '../../assets/images/pokemon-card.png'
import tcgIcon from '../../assets/images/tcg-deck.png'
import Forums from './04forums/Forums'

const mainroutes = [
    {
        name: 'HOME',
        path: '/',
        element: <Home />,
    },
    {
        name: 'PokeTCG',
        path: 'poketcg pulse/*',
        icon: tcgIcon,
        element: <PokemonTCG />,
    },
    {
        name: 'CARDS',
        path: 'cards/*',
        icon: cardIcon,
        element: <Cards />,
    },
    {
        name: 'FORUMS',
        path: 'forums/*',

        element: <Forums />,
    },
]

export default mainroutes
