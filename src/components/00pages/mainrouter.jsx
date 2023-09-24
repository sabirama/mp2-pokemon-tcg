import Home from "./01home/Home";
import About from "./02about/About";
import Cards from "./03cards/Cards";

const mainroutes = [
  {
    name: "HOME",
    path: "/",
    element: <Home />,
  },
  {
    name: "ABOUT",
    path: "/about",
    element: <About />,
  },
  {
    name: "CARDS",
    path: "/cards/*",
    element: <Cards />,
  },
];

export default mainroutes;
