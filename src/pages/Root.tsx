import React from 'react';
import { Navigation } from '@/pages/Navigation';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

export const Root = ({ route }: RouteConfigComponentProps) => (
  <>
    <Navigation />
    {renderRoutes(route?.routes)}
  </>
);
