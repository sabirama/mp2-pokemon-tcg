import mapping from "../../methods/mapping";
import cardRoutes from "./subpages/cardRoutes";
const CardNav = () => {
  return <div>{mapping(cardRoutes)}</div>;
};

export default CardNav;
