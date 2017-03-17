/* eslint-disable react/no-array-index-key */
import React from 'react';

import './preloader.css';

const Preloader = () => (
  <div className="spinner">
    {[...Array(4)].map((line, i) => (
      <div key={i} className={`spinner__line spinner__line--${i + 1}`}>
        <div className="spinner__line-cog">
          <div
            className="spinner__line-cog-inner spinner__line-cog-inner--left"
          />
        </div>
        <div className="spinner__line-ticker">
          <div
            className="spinner__line-cog-inner spinner__line-cog-inner--center"
          />
        </div>
        <div className="spinner__line-cog">
          <div
            className="spinner__line-cog-inner spinner__line-cog-inner--right"
          />
        </div>
      </div>
    ))}
  </div>
);

export default Preloader;
