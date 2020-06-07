import { RouteConfig } from 'react-router-config';
import { App } from '@/pages/App';
import { Authorized } from '@/pages/authorized/Authorized';

export const routes: Array<RouteConfig> = [
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
];
