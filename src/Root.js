import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ children, intialState = {} }) => {
  const store = createStore(
    reducers,
    intialState,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};
