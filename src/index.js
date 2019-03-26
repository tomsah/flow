import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore,  applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
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

function mainRender() {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root')
  );
}

if (process.env.NODE_ENV !== "production") {
  // Workaround for https://github.com/facebook/create-react-app/issues/6399
  // until it gets fixed upstream
  setTimeout(() => {
    mainRender();
  }, 1000);
} else {
  mainRender();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
