import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p onClick={() => dispatch(push('/'))}>Home</p>
      <p onClick={() => dispatch(push('/authorized'))}>Authorized</p>
    </div>
  );
};
