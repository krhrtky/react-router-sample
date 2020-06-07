import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { App } from './pages/App';
import { Authorized } from '@/pages/authorized/Authorized';
import { createBrowserHistory, History } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {
  routerMiddleware,
  connectRouter,
  ConnectedRouter,
} from 'connected-react-router';
import { Provider } from 'react-redux';
import { Navigation } from '@/pages/Navigation';

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
        <Switch>
          <Route exact path="/" component={App}>
            <App />
          </Route>
          <Route exact path="/authorized" component={Authorized}>
            <Authorized />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

render(<Main />, document.getElementById('app'));
