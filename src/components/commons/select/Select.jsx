import PropTypes from 'prop-types';
import { useState } from 'react';

function Select({ handler, options }) {
  const [item, setItem] = useState('');

  function setter(e) {
    setItem(e.target.value);
    handler(e);
  }

  return (
    <div>
      <label className="order">DISPLAY BY: {item.toUpperCase()}</label>
      <div className="radio-container d-flex gap-2">
        {options.values.map((option, key) => (
          <span key={key}>
            <input type="radio" name={options.name} value={option} onClick={setter} /> {option.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

Select.propTypes = {
  handler: PropTypes.func.isRequired,
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Select;
