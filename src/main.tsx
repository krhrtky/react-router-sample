import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory, History } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {
  routerMiddleware,
  connectRouter,
  ConnectedRouter,
} from 'connected-react-router';
import { Provider } from 'react-redux';
import { Navigation } from '@/pages/Navigation';
import { renderRoutes } from 'react-router-config';
import { routes } from '@/routes/routes';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare let window: ExtendedWindow;

const history = createBrowserHistory();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const createInitialStore = (history: History) =>
  createStore(
    combineReducers({
      router: connectRouter(history),
    }),
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );

const store = createInitialStore(history);

const Main = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Navigation />
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>
  );
};

render(<Main />, document.getElementById('app'));
