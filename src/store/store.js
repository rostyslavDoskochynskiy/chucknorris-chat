import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '@app/store/reducers';
import { history, API } from '@app/services';

const middleware = thunk.withExtraArgument({
  api: API,
});

const enhancer = compose(applyMiddleware(middleware));

const store = createStore(rootReducer, enhancer);

export const storeConfigs = app => (
  <Provider store={store}>
    <BrowserRouter>
      <Router history={history}>{app}</Router>
    </BrowserRouter>
  </Provider>
);
