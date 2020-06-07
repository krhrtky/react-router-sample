import { ActionType } from '@/store/action';

export type User = {
  authorized: boolean;
};

export const reducer: (state: User, action: ActionType) => User = (
  state = { authorized: false },
  action
) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, authorized: true };
    case 'LOGOUT':
      return { ...state, authorized: false };
    default:
      return state;
  }
};
