import { PropTypes } from 'prop-types';
import './Pagination.css';

function Pagination({ page, setPage }) {
  function handleChange(e) {
    setPage(Number(e.target.value));
  }
  //pagination methods
  function previousPage() {
    page == 1 ? setPage(1) : setPage(page - 1);
  }

  function nextPage() {
    page == 68 ? setPage(68) : setPage(page + 1);
  }

  return (
    <div className="pagination-container p-2">
      <button className="pagination-nav-btn" onClick={previousPage}>
        Prev
      </button>

      <div className="pagination-input-container">
        <p className="pagination-label">PAGE</p>
        <input name="page-input" type="number" value={page} className="pagination-input" onInput={handleChange} />
      </div>
      <button className="pagination-nav-btn" onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
