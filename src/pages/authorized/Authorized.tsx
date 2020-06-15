import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import type { Store } from '@/store';

export const Authorized = () => {
  const user = useSelector((store: Store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.authorized) {
      dispatch(push('/'));
      return;
    }
    console.log('authorized!');
  }, [user]);

  return <h1>Authorized </h1>;
};
