import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function AddLinks({ mapLinks, baseUrl = '' }) {
  return (
    <>
      {mapLinks.map((route, key) => {
        return route.path === '*' || route.path === '/' ? null : (
          <Link key={key} to={baseUrl + route.path} className="internal-link">
            {route.name.toUpperCase()}
          </Link>
        );
      })}
    </>
  );
}

AddLinks.propTypes = {
  mapLinks: PropTypes.array.isRequired,
  baseUrl: PropTypes.string,
};

export default AddLinks;
