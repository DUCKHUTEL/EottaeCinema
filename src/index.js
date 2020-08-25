import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import App from './App';
import {Provider}from "react-redux"
import Store from './Redux/create';

const store = Store()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,document.getElementById('root'));