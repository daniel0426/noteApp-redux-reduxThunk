import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';
import rootReducer, {rootSaga} from './store/modules/index';
//middleware
import loggerMiddleware from './lib/logger';
// import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, sagaMiddleware));
sagaMiddleware.run(rootSaga);
console.log(store.getState);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);