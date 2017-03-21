import React from 'react';
import './spinner.css';

const Spinner = () => (
  <div className="spinner">
    <div className="spinner__inner">
      <div className="spinner__half spinner__half--left" />
      <div className="spinner__half spinner__half--right" />
    </div>
  </div>
);
export default Spinner;
