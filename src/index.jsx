import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import noteReducer from './store/modules/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(noteReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);