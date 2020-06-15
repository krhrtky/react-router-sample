import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { action } from '@/store/action';
import type { Store } from '@/store';

export const Navigation = () => {
  const user = useSelector((store: Store) => store.user);
  const dispatch = useDispatch();
  return (
    <div>
      <p onClick={() => dispatch(push('/'))}>Home</p>
      <p onClick={() => dispatch(push('/authorized'))}>Authorized</p>
      {user.authorized ? (
        <button onClick={() => dispatch(action.logout())}>logout</button>
      ) : (
        <button onClick={() => dispatch(action.login())}>login</button>
      )}
    </div>
  );
};
