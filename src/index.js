import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import configureStore from './store'
import { createStore,  applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import rootReducer from './reducer/rootReducer'
import reducer from './reducer'
import { getAllProducts } from './actions'

import './styles.scss';
import App from './component/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

store.dispatch(getAllProducts())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
