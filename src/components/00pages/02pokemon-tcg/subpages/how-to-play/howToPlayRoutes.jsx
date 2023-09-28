import GameTerms from './game-terms/GameTerms'
import Guide from './guide/Guide'

const HowToPlayRoutes = [
    {
        name: 'GUIDE',
        path: '*',
        element: <Guide />,
    },
    {
        name: 'GAME TERMS',
        path: 'game-terms',
        element: <GameTerms />,
    },
]

export default HowToPlayRoutes
