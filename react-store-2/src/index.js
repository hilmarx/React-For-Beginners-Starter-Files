import React from 'react';
import ReactDom from 'react-dom';
import './css/style.css';
import Router from './components/Router'


ReactDom.render(
    <Router/>,
    document.querySelector('#main')
)