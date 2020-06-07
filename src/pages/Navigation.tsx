import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push, RouterState } from 'connected-react-router';
import { creator } from '@/store/action';
import { User } from '@/store/reducer';

export const Navigation = () => {
  const user = useSelector(
    // eslint-disable-next-line @typescript-eslint/ban-types
    (store: { user: User; router: RouterState<{} | null | undefined> }) =>
      store.user
  );
  const dispatch = useDispatch();
  return (
    <div>
      <p onClick={() => dispatch(push('/'))}>Home</p>
      <p onClick={() => dispatch(push('/authorized'))}>Authorized</p>
      {user.authorized ? (
        <button onClick={() => dispatch(creator.logout())}>logout</button>
      ) : (
        <button onClick={() => dispatch(creator.login())}>login</button>
      )}
    </div>
  );
};
