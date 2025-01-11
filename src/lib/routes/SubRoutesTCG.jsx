import Set from "../../components/pages/tcg/modules/by-set/Set";
import Index from "../../components/pages/tcg/modules/index/Index";
import Search from "../../components/pages/tcg/modules/search/Search";

//under TCG path
const SubRoutesTCG = [
  {
    name: "index",
    path: "*",
    element: Index,
  },
  {
    name: "set",
    path: "set",
    element: Set,
  },
  {
    name: "search",
    path: "search",
    element: Search,
  },
];

export default SubRoutesTCG;
