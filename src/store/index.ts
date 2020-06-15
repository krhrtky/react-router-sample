import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createBrowserHistory, History } from 'history';
import {
  connectRouter,
  routerMiddleware,
  RouterState,
} from 'connected-react-router';
import { reducer, User } from '@/store/reducer';

export type Store = {
  user: User;
  // eslint-disable-next-line @typescript-eslint/ban-types
  router: RouterState<{} | null | undefined>;
};

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
      user: reducer,
    }),
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );

export const Store = {
  initial: createInitialStore(history),
  history,
};
