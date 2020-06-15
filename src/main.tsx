import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { routes } from '@/routes';
import { Store } from '@/store';

const Main = () => {
  return (
    <Provider store={Store.initial}>
      <ConnectedRouter history={Store.history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>
  );
};

render(<Main />, document.getElementById('app'));
