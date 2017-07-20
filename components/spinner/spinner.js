import React from 'react';
import PropTypes from 'prop-types';

import './spinner.css';

const Spinner = ({ size }) =>
  <div className="spinner">
    <div className="spinner__inner" style={{ width: size, height: size }}>
      <div className="spinner__half spinner__half--left" />
      <div className="spinner__half spinner__half--right" />
    </div>
  </div>;

Spinner.propTypes = {
  /** The diameter of the circle */
  size: PropTypes.number
};

Spinner.defaultProps = {
  size: 100
};

export default Spinner;
