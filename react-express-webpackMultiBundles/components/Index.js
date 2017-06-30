import React from 'react';
import ReactDOM from 'react-dom';

console.log(`process.env.BROWSER: ${process.env.BROWSER}`);

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);