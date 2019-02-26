// Import React dependency from Node.js
import React from 'react';

// Import render method from react-dom lib that allows us to render the dom of our website
import { render } from 'react-dom';

// Import React Components
import App from './components/App';

// Import Router that decides which page to render
import Router from './components/Router';

// Import CSS into the CSS components
import "./css/style.css";

render(<Router />, document.querySelector('#main'))
//render(<App/>, document.querySelector('#main'))