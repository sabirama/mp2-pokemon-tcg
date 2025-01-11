import OurSite from "./../../components/pages/about/modules/oursite/OurSite";
import Guide from "../../components/pages/about/modules/guide/Guide";
import LearnMore from "../../components/pages/about/modules/learn-more/LearnMore";

//under about path
const AboutRoutes = [
  {
    name: "about",
    path: "*",
    element: LearnMore,
  },
  {
    name: "about us",
    path: "our-site/",
    element: OurSite,
  },
  {
    name: "guide",
    path: "guide/*",
    element: Guide,
  },
];

export default AboutRoutes;
