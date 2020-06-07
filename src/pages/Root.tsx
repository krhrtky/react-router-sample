import React, { useEffect } from 'react';
import { Navigation } from '@/pages/Navigation';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { useDispatch, useSelector } from 'react-redux';
import { push, RouterState } from 'connected-react-router';
import { User } from '@/store/reducer';

export const Root = ({ route }: RouteConfigComponentProps) => {
  const user = useSelector(
    // eslint-disable-next-line @typescript-eslint/ban-types
    (store: { user: User; router: RouterState<{} | null | undefined> }) =>
      store.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.authorized) {
      console.log('not authorized.');
      dispatch(push('/'));
    }
  }, [user]);

  return (
    <>
      <Navigation />
      {renderRoutes(route?.routes)}
    </>
  );
};
