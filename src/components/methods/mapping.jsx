import { Link } from "react-router-dom";

const mapping = (item) => {
  return (
    <ul>
      {item.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default mapping;
