import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

if (process.env.NODE_ENV === 'production') {
  console.log('BUILD NUM : ', process.env.BUILD_NUM);
}

ReactDOM.render(<App />, document.getElementById('root'));
