import { Link } from "react-router-dom";
import "./mapping.css";

const mapping = (item, excempt) => {
  return (
    <ul className="mapped-list">
      {item.map((item, index) => {
        if (item.name == excempt) {
          return null;
        } else
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
