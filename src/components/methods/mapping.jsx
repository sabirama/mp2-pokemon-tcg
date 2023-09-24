import { Link } from "react-router-dom";
import "./mapping.css";

const mapping = (item) => {
  return (
    <ul className="mapped-list">
      {item.map((item, index) => {
        return (
          <li key={index} className="link-container">
            <Link to={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default mapping;
