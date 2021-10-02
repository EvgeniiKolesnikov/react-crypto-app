import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/react-crypto-app'>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
