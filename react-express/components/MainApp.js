/** PARA EL MANEJO DE MODULOS ES POSIBLE USAR ES6 O COMMONJS */

//import React from 'react';
var React = require('react');

import ReactDOM from 'react-dom';
import UserPage from './UserPage';

const pages = {
  users: <UserPage />,
  index: <h1>Hello, world!</h1>
};

let rootElem = document.getElementById('root');
let page = rootElem.getAttribute('page');

console.log(`Page to render: ${page}`);

ReactDOM.render(
  pages[page],
  rootElem
);