import Home from './../../components/pages/home/Home';
import About from './../../components/pages/about/About';
import TCG from '../../components/pages/tcg/TCG';

const MainRoutes = [
    {
        name: "home",
        path: "/",
        element: Home
    },
    {
        name: "about",
        path: "/about/*",
        element: About
    },
    {
        name: "tcg",
        path: "/tcg/*",
        element: TCG
    }
];

export default MainRoutes;