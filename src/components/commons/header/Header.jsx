import { Link } from 'react-router-dom';
import AddLinks from '../../../lib/scripts/AddLinks';
import MainRoutes from '../../../lib/routes/MainRoutes';
import PropTypes from 'prop-types';

function Header({ theme, setTheme }) {
  function updateTheme() {
    if (theme === '') {
      setTheme('dark-mode');
    } else {
      setTheme('');
    }
  }

  return (
    <header>
      <Link to={'/'} className="text-logo">
        POKEPULSE
      </Link>
     

      <nav className="internal-links-container">
        <AddLinks mapLinks={MainRoutes} />
        <button onClick={updateTheme} className="theme-btn">
        {theme === '' ? 'light' : 'dark'}
      </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
