import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './redux/reducers';
import postSaga from './redux/sagas/posts.sagas'
import bookSaga from './redux/sagas/books.sagas'
import userSaga from './redux/sagas/user.sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga)
sagaMiddleware.run(postSaga)
sagaMiddleware.run(bookSaga)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

