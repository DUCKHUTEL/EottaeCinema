import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './normalize.css';
import App from './App';



import {Provider}from "react-redux"
import Store from './redux/create';

const store = Store()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,document.getElementById('root'));