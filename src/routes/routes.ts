import { RouteConfig } from 'react-router-config';
import { App } from '@/pages/App';
import { Authorized } from '@/pages/authorized/Authorized';
import { Root } from '@/pages/Root';

export const routes: Array<RouteConfig> = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: App,
      },
      {
        path: '/authorized',
        exact: true,
        component: Authorized,
      },
    ],
  },
];
