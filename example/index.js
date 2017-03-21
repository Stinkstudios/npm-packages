import React from 'react';
import ReactDOM from 'react-dom';
import Fullbleed from '../components/fullbleed/fullbleed';

ReactDOM.render(
  <div>
    <Fullbleed addClass="home-page__bg" width={200} height={300} ratio={'1:1'}>
      <img src="https://placekitten.com/300/201" alt="" />
    </Fullbleed>
  </div>,
  document.getElementById('container')
);
