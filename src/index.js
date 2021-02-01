/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk'
import App from './App';
import rootReducer from './redux/rootReducer'
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();
