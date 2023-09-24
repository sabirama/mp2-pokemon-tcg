import mainroutes from "../00pages/mainrouter";
import mapping from "../methods/mapping";
const Header = () => {
  return (
    <header>
      <span>HOME</span>
      <nav>{mapping(mainroutes)}</nav>
    </header>
  );
};

export default Header;
